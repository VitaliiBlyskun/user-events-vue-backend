const { Event } = require("../../models");

const fetchEvent = async (request, response) => {
  const { page = 1, limit = 10 } = request.query
  const skip = (page -1) * limit
  const events = await Event.find({}, "-createdAt -updatedAt", {skip, limit});
  response.json({
    status: "success",
    code: 200,
    data: {
      result: events,
    },
  });
};

module.exports = fetchEvent;
