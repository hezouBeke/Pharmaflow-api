const Joi = require('joi'); 

const clientValidator = Joi.object({
    name: Joi.string().trim().required(),
    sex: Joi.string().trim().valid('male', 'female').required(),
    email: Joi.string().trim().email().required(),
    age: Joi.number().integer().min(0).required(),
    tel: Joi.string().pattern(/^[0-9]{8}$/).required(),
});

module.exports = clientValidator;