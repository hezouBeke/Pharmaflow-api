const Joi = require('joi');

const medicValidator = Joi.object({
    name: Joi.string().required(),
    codebar: Joi.string().alphanum().required(),
    desc: Joi.string().min(5).max(200).required(),
    prix_unit: Joi.number().positive().required(),
    qte_dispo: Joi.number().min(0).required(),
    Category: Joi.string().required()
});

module.exports = medicValidator;