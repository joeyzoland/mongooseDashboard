var mongoose = require('mongoose')
var Turtle = mongoose.model("Turtle")

module.exports = {
  index: function(req, res) {
    Turtle.find({}, function(err, turtles) {
      if(err) {
        console.log("Got an error on retrieval :(")
      }
      else {
        console.log("got to rendering of index route")
        //Adding a "view" key to differentiate between displays in templates
        wrappedTurtleList = {"turtleList": turtles, "view": "all"}
        res.render("index", wrappedTurtleList)
      }
    })
  },

  selectOne: function(req, res) {
    Turtle.find({_id: req.params.id}, function(err, turtles) {
      if(err) {
        console.log("Got an error on retrieval :(")
      }
      else {
        console.log("got to rendering of index route")
        //Adding a "view" key to differentiate between displays in templates
        wrappedTurtleList = {"turtleList": turtles, "view": "one"}
        res.render("index", wrappedTurtleList)
      }
    })
  },

  editPage: function(req, res) {
    Turtle.find({_id: req.params.id}, function(err, turtles) {
      if(err) {
        console.log("Got an error on retrieval for editing :(")
      }
      else {
        console.log("Got to rendering of edit route")
        //Adding a "view" key to differentiate between routes
        wrappedTurtleList = {"turtleList": turtles, "view": "edit"}
        res.render("index", wrappedTurtleList)
      }
    })
  },

  editOne: function(req, res) {
    Turtle.findOne({_id: req.params.id}, function (err, turtle) {
      turtle.name = req.body.name;
      turtle.hobby = req.body.hobby
      turtle.save(function(err) {
        if(err) {
          console.log("Got an error on turtle edit saving")
        }
        else {
          console.log("Successfully saved edits to a turtle!!!")
          res.redirect("/")
        }
      })
    })
  },

  removeOne: function(req, res) {
    Turtle.remove({_id: req.params.id}, function (err) {
      if(err) {
        console.log("Got an error while trying to delete the turtle")
      }
      else {
        console.log("Successfully deleted a turtle!!!")
        res.redirect("/")
      }
    })
  },

  createOne: function(req, res) {
    var turtle = new Turtle({
      name: req.body.name,
      hobby: req.body.hobby
    })
    turtle.save(function(err) {
      if(err) {
        console.log("Got an error on turtle addition")
      }
      else {
        console.log("Successfully added a turtle!!!")
        res.redirect("/")
      }
    })
  }


}
