const mongoose = require("mongoose");

const movieticketSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movielist",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema"
    },
});

const movieticket = mongoose.model("movieticketSchema", movieticketSchema);

module.exports = movieticket;
