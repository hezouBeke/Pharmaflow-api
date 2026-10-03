const Joi = require('joi');

const clientUpdateValidator = Joi.object({
    name: Joi.string().trim().optional(),
    sex: Joi.string().trim().valid('male', 'female').optional(),
    email: Joi.string().trim().email().optional(),
    age: Joi.number().integer().min(0).optional(),
    tel: Joi.string().pattern(/^[0-9]{8}$/).optional(),
}).min(1);

module.exports = clientUpdateValidator;