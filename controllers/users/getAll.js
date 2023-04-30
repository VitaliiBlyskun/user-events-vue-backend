const { User } = require("../../models");

const getAll = async (request, response) => {
  const { page = 1, limit = 50 } = request.query
  const skip = (page -1) * limit
  const users = await User.find({}, "-createdAt -updatedAt", {skip, limit});
  response.json({
    status: "success",
    code: 200,
    data: {
      result: users,
    },
  });
};

module.exports = getAll;
