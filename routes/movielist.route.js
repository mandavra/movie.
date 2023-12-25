const express= require("express");
const validate = require("../middlewares/validate");
const { movielistValidation } = require("../validations");
const { movielistController } = require("../controllers");
const route = express.Router();

route.post("/add", validate(movielistValidation.addmovielist), movielistController.addmovielist);
route.get("/get", movielistController.getmovielist);
route.delete("/delete/:id", movielistController.deletemovielist);
module.exports=route;
