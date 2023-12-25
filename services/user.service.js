const { userSchema } = require("../models");

const addUser = (body) => {
  return userSchema.create(body);
};

const getuser = () => {
  return userSchema.find();
};

const deleteuser = (id) => {
  return userSchema.findByIdAndDelete(id);
};

module.exports = { addUser, getuser, deleteuser};
