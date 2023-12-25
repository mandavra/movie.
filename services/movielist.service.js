const { movielistSchema } = require("../models");

const addmovielist = (body) => {
  return movielistSchema.create(body);
};

const getmovielist = () => {
  return movielistSchema.find();
};

const deletemovielist = (id) => {
  return movielistSchema.findByIdAndDelete(id);
};

module.exports = { addmovielist, getmovielist, deletemovielist};
