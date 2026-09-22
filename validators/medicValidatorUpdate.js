const Joi = require('joi');

const medicalValidatoroptional = Joi.object({
    name: Joi.string().trim().optional(),
    codebar: Joi.string().trim().alphanum().optional(),
    desc: Joi.string().trim().min(5).max(200).optional(),
    prix_unit: Joi.number().positive().optional(),
    qte_dispo: Joi.number().min(0).optional(),
    Category: Joi.string().trim().pattern(/^[0-9a-fA-F]{24}$/).optional().messages({
    "string.pattern.base": "Category must be a valid ObjectId"
})
}).min(1);

module.exports = medicalValidatoroptional;