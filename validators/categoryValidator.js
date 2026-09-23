const Joi = require('joi');



const categoryValidator = Joi.object({
    name: joi.string().trim().required(),
    desc: joi.string().trim().min(5).max(200).required()

});

module.exports = categoryValidator;