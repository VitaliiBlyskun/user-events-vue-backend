const express = require("express");
const router = express.Router();

const { validateBody } = require("../../middlewares");

const { eventSchema } = require("../../schemas");

const { eventController } = require("../../controllers");

router.post(
  "/",
  validateBody(eventSchema.addEventSchema),
  eventController.addEvent
);

module.exports = router;
