// const { Event } = require('../../models');

// const addEvent = async (request, response) => {
//   const result = await Event.create(request.body);
//   response.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result,
//     },
//   });
// };

// module.exports = addEvent;

// const { Event } = require('../../models');

// const addEvent = async (request, response) => {
//   const { title, description, startDate, endDate, userId } = request.body;
//   const result = await Event.create({  title, description, startDate, endDate, userId });
//   response.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result,
//     },
//   });
// };

// module.exports = addEvent;

const { User, Event } = require("../../models");
const { HttpError } = require("../../utils");

const addEvent = async (request, response) => {
  const { title, description, startDate, endDate, userId } = request.body;

  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  const result = await Event.create({
    title,
    description,
    startDate,
    endDate,
    userId,
  });

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

module.exports = addEvent;
