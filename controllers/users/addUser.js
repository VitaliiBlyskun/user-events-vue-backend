const usersOperations = require("../../models/users");

const addUser = async (request, response, next) => {
  const result = await usersOperations.addUser(request.body);
  response.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addUser;
