var express = require("express")
var path = require("path")
var app = express()
var bodyParser = require("body-parser")

var mongoose = require('mongoose');
mongoose.promise = global.promise

app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname, "./client/static")))

app.set("view engine", "ejs")

app.set('views', path.join(__dirname, './client/views'));

require("./server/config/mongoose.js")

var routes_setter = require("./server/config/routes.js")

routes_setter(app)

app.listen(8000, function() {
  console.log("Server is listening on port 8000")
})
