const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().min(10).required(),
});

module.exports = {
  addSchema,
};
