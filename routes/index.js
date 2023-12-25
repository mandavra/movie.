const express = require("express");
const routes = express.Router();
const movielistRoutes = require("./movielist.route");
const userRoutes = require("./user.routes");
const movieticketRoutes = require("./movieticket.route");


routes.use("/user", userRoutes);
routes.use("/movieticket", movieticketRoutes);
routes.use("/movielist", movielistRoutes);




module.exports = routes;
