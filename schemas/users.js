const Joi = require("joi");

const addSchema = Joi.object({
  userName: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().min(10).required(),
});

module.exports = {
  addSchema,
};
