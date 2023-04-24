const usersOperations = require("../../models/users");

const getAll = async (request, response, next) => {
    const users = await usersOperations.listUsers();
    response.json({
      status: "success",
      code: 200,
      data: {
        result: users,
      },
    });
};

module.exports = getAll