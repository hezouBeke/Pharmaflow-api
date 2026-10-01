const Joi = require('joi');

const loginValidator = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(6).required()
});

module.exports = loginValidator;