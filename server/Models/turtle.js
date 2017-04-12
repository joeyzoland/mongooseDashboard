var mongoose = require("mongoose")

var TurtleSchema = new mongoose.Schema({
  name: String,
  hobby: String
})

var Turtle = mongoose.model("Turtle", TurtleSchema)
