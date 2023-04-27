const { User } = require("../../models");

const addUser = async (request, response) => {
  const result = await User.create(request.body);
  response.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addUser;
