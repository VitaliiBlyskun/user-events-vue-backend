const { User } = require("../../models");
const { HttpError } = require("../../utils");

const getById = async (request, response) => {
  const { id } = request.params;
  const user = await User.findById(id);
  if (!user) {
    throw HttpError(404, "User not found");
  }
  response.json({
    status: "success",
    code: 200,
    data: {
      result: user,
    },
  });
};

module.exports = getById;
