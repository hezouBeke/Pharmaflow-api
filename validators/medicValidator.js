const Joi = require('joi')

const medicValidator = Joi.object({
    name: Joi.string().trim().required(),
    codebar: Joi.string().trim().alphanum().required(),
    desc: Joi.string().trim().min(5).max(200).required(),
    prix_unit: Joi.number().positive().required(),
    qte_dispo: Joi.number().min(0).required(),
    Category: Joi.string().trim().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
    "string.pattern.base": "Category must be a valid ObjectId"
})
});

module.exports = medicValidator;

