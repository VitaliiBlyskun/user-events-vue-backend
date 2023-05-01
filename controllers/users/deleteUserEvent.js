const { User } = require("../../models");
const { HttpError } = require("../../utils");

const deleteUserEvent = async (request, response) => {
  const { userId, eventId } = request.params;

  const user = await User.findById(userId);

  if (!user) {
    throw HttpError(404, "User not found");
  }

  const eventIndex = user.events.findIndex(
    (event) => event._id.toString() === eventId
  );

  if (eventIndex === -1) {
    throw HttpError(404, "Event not found");
  }
  user.events.splice(eventIndex, 1);
  await user.save();
  return response.status(200).json({
    status: "success",
    code: 200,
    data: {
      user,
    },
  });
};

module.exports = deleteUserEvent;
