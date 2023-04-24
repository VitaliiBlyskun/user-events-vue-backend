const usersOperations = require("../../models/users");
const { HttpError } = require("../../utils");

const getById = async (request, response, next) => {
  const { id } = request.params;
  const result = await usersOperations.getUserById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
