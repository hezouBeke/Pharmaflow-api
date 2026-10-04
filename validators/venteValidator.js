const venteValidator = Joi.object({
    client: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).optional(), 
    lignes: Joi.array().items(
        Joi.object({
            medicament: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
            quantite: Joi.number().integer().positive().required()
        })
    ).min(1).required()
});

module.exports = venteValidator;