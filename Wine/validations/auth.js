const Joi = require('joi');

const registerValidator = (data) => {
    const rule = Joi.object({
        username: Joi.string().min(6).max(225).required(),
        email: Joi.string().min(6).max(225).required().email(),
        password: Joi.string().required(),
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
    })

    return rule.validate(data);
}

module.exports.registerValidator = registerValidator;
