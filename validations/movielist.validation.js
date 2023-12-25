const Joi = require("joi")

const addmovielist = {
  body: Joi.object().keys({
    moviedate: Joi.string().required().trim(),
    movieName : Joi.string().required(),
    ticketprice: Joi.number().required(),
  }),
};

module.exports = { addmovielist};