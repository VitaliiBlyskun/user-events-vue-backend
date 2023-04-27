const { User } = require("../../models");
const { HttpError } = require("../../utils");

const deleteById = async (request, response) => {
  const { id } = request.params;
  const result = await User.findByIdAndRemove(id);
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
