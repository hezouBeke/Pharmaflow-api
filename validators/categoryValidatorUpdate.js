const Joi = require('joi');

const categoryValidatoroptional = Joi.object({
    name: Joi.string().trim().optional(),
    desc: Joi.string().trim().min(5).max(200).optional(),

}).min(1);

module.exports = categoryValidatoroptional;

