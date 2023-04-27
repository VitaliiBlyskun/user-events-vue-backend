const { User } = require("../../models");

const getAll = async (request, response) => {
  const users = await User.find();
  response.json({
    status: "success",
    code: 200,
    data: {
      result: users,
    },
  });
};

module.exports = getAll;
