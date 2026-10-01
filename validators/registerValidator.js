const Joi= require('joi');

const registerValidator = Joi.object({
    name: Joi.string().trim().required(),
    sex: Joi.string().trim().valid('male', 'female').required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).required(),
    age: Joi.number().integer().min(0).required(),
    tel: Joi.string().pattern(/^[0-9]{10}$/).required(),
    role: Joi.string().valid('admin', 'vendeur').default('vendeur')

}).min(1    );

module.exports = registerValidator;


