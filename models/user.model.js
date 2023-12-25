const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  usermobile: {
    type:Number,
  },
  userid: {
    type: String,
  },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
