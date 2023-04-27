const { Event } = require("../../models");
const { HttpError } = require("../../utils");

const deleteEvent = async (request, response) => {
  const { id } = request.params;
  const result = await Event.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json({
    status: "success",
    code: 200,
    message: "Event with id: " + id + " has been deleted",
    data: {
      result,
    },
  });
};

module.exports = deleteEvent;
