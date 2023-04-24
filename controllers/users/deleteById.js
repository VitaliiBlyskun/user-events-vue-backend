const usersOperations = require("../../models/users");
const { HttpError } = require("../../utils");

const deleteById = async (request, response, next) => {
  const { id } = request.params;
  const result = await usersOperations.removeUser(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json({
    status: "success",
    code: 200,
    message: "user deleted",
    data: {
      result,
    },
  });
};

module.exports = deleteById;
