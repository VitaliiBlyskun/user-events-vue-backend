const { User } = require("../../models");
const { HttpError } = require("../../utils");

const getUserEvents = async (request, response) => {
  const { id } = request.params;

    const user = await User.findById(id).populate('events');
    if (!user) {
      throw HttpError(404, "User not found");
    }
    response.status(200).json({
    status: "success",
    code: 200,
    data: {
      user,
    },
  });
};

module.exports = getUserEvents;