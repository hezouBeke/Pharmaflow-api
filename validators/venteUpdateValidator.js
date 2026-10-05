const Joi = require("joi");

const venteUpdateValidator = Joi.object({
    status: Joi.string().valid("en cours", "terminée", "annulée"),
    client: Joi.string().pattern(/^[0-9a-fA-F]{24}$/)
})
    .min(1)
    .unknown(false);

module.exports = venteUpdateValidator;
