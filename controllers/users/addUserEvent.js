const { User, Event } = require("../../models");
const { HttpError } = require("../../utils");

const addUserEvent = async (request, response) => {
  const { title, description, startDate, endDate } = request.body;
  const userId = request.params.userId;

      if (typeof userId !== 'string') {
    return response.status(400).json({ message: 'userId must be a string' });
  }

    const user = await User.findById(userId);
    if (!user) {
      throw HttpError(404, "User not found");
    }

    const newEvent = new Event({
      title,
      description,
      startDate,
      endDate,
      userId: user._id,
    });

    const result = await newEvent.save();

    user.events.push(result._id);
    await user.save();

    response.status(201).json({
      status: "success",
      code: 201,
      data: {
        event: result,
      },
    });

};

module.exports = addUserEvent;