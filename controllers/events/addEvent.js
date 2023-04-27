const { Event } = require('../../models');

const addEvent = async (request, response) => {
  const result = await Event.create(request.body);
  response.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};
    
module.exports = addEvent;