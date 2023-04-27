const { Event } = require("../../models");
const { HttpError } = require("../../utils");

// const fetchEvent = async (req, res) => {
//         const id = req.params.id;
//         try {
//             const events = await Event.find({ user_id: id });
//             res.status(200).json(events);
//         } catch (err) {
//             res.status(404).json({ message: err.message });
//         }
// }

// const fetchEvent = async (request, response) => {
//   const { id } = request.params;
//   const event = await Event.find({ event_id: id });
//   console.log("result:", event);
//   if (!event) {
//     throw HttpError(404, "User not found");
//   }
//   response.json({
//     status: "success",
//     code: 200,
//     data: {
//       result: event,
//     },
//   });
// };

const fetchEvent = async (request, response) => {
  const events = await Event.find();
  response.json({
    status: "success",
    code: 200,
    data: {
      result: events,
    },
  });
};

module.exports = fetchEvent;
