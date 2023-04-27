const express = require("express");
const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");

const { eventSchema } = require('../../schemas');


const { eventController } = require('../../controllers');


// router.get("/:id", eventController.fetchEvent);
router.get("/", eventController.fetchEvent);
router.post("/", validateBody(eventSchema.addEventSchema), eventController.addEvent);
router.delete("/:id", isValidId, eventController.deleteEvent);

module.exports = router;