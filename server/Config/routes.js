var turtles = require("../controllers/turtles.js")

module.exports = function(app) {
  //This loads the main page with all turtles
  app.get("/", function (req, res) {
    turtles.index(req, res)
  })

  //This loads the "create turtle" page
  app.get("/turtles/new", function (req, res) {
    res.render("create")
  })

  //This loads the main page (i.e., uneditable) with the one specified turtle
  app.get("/turtles/:id", function (req, res) {
    turtles.selectOne(req, res)
  })

  //This route loads the edit page for the specified turtle
  app.get("/turtles/edit/:id", function (req, res) {
    turtles.editPage(req, res)
  })

  //This route handles the actual editing of the turtle, and then redirects to the index
  app.post("/turtles/:id", function (req, res) {
    turtles.editOne(req, res)
  })

  //This route handles the deleting of the turtle, and then redirects to the index
  app.post("/turtles/destroy/:id", function (req, res) {
    turtles.removeOne(req, res)
  })

  //This route actually creates the new turtle
  app.post("/turtles", function (req, res) {
    turtles.createOne(req, res)
  })
}
