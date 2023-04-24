const { HttpError } = require("../../utils");
const usersOperations = require("../../models/users");

const updateById = async (request, response, next) => {
  const { id } = request.params;
  const result = usersOperations.updateUser(id, request.body);
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

module.exports = updateById;
