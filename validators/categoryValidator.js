const Joi = require('joi');

const categoryValidator = Joi.object({
    name: Joi.string().trim().required(),
    desc: Joi.string().trim().min(5).max(200).required()

});

module.exports = categoryValidator;