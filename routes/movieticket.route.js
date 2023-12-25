const express = require("express");
const { movieticketController } = require("../controllers");

const route = express.Router();

route.post("/add",movieticketController.addmovieticket);
route.get("/get", movieticketController.getmovieticket);
route.delete("/delete/:id", movieticketController.deletemovieticket);
module.exports = route;
