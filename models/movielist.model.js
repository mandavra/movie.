const mongoose = require("mongoose");

const movielistSchema = new mongoose.Schema({
  movieName: {
    type: String,
  },
  ticketprice: {
    type:Number,
  },
  moviedate: {
    type: String,
  },
});

const movielist = mongoose.model(" movielist",  movielistSchema);

module.exports =  movielist;
