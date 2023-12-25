const { movieticketSchema } = require("../models");

const addmovieticket = (body) => {
  return movieticketSchema.create(body);
};

const getmovieticket = () => {
  return movieticketSchema.find().populate("movie").populate("user");
};

const deletemovieticket = (id) => {
  return movieticketSchema.findByIdAndDelete(id);
};

module.exports = { addmovieticket, getmovieticket, deletemovieticket};
