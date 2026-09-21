const Joi = require('joi')

const medicValidator = Joi.object({
    name: Joi.string().trim().required(),
    codebar: Joi.string().trim().alphanum().required(),
    desc: Joi.string().trim().min(5).max(200).required(),
    prix_unit: Joi.number().positive().required(),
    qte_dispo: Joi.number().min(0).required(),
    Category: Joi.string().trim().required()
});

module.exports = medicValidator;

