const Joi = require("joi")

const adduser = {
  body: Joi.object().keys({
    userName: Joi.string().required().trim(),
    password : Joi.string().required(),
    email: Joi.string().required(),
  }),
};

module.exports = { adduser};