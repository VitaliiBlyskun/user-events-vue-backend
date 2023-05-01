// const { User } = require("../../models");

// const getAll = async (request, response) => {
//   const { page = 1, limit = 50 } = request.query
//   const skip = (page -1) * limit
//   const users = await User.find({}, "-createdAt -updatedAt", {skip, limit});
//   response.json({
//     status: "success",
//     code: 200,
//     data: {
//       result: users,
//     },
//   });
// };

// module.exports = getAll;


const { User } = require("../../models");

const getAll = async (request, response) => {
  const { page = 1, limit = 50 } = request.query;
  const skip = (page - 1) * limit;

  const result = await User.find({}, "-createdAt -updatedAt", {skip, limit}).populate('events');

  const usersWithEventsCount = result.map(user => ({
    _id: user._id,
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    eventsCount: user.events.length,
  }));

  response.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: usersWithEventsCount,
    },
  });
};

module.exports = getAll;