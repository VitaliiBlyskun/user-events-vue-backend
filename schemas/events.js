const Joi = require("joi");

const addEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  userId: Joi.string().required(),
});

module.exports = {
 addEventSchema,
};