// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all workouts
  app.get("/", function(req, res) {

    var dbQuery = "SELECT * FROM workout";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

  // Add a workout
  app.post("/api/new", function(req, res) {

    console.log("Workout Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO workout (name, exercise, weight, reps, sets, totalReps, workoutTime) VALUES (?,?,?,?,?,?,?)";

    connection.query(dbQuery, [req.body.name, req.body.exercise, req.body.totalReps, req.body.workoutTime], function(err, result) {
      console.log("Workout Successfully Saved!");
      res.end();
    });

  });

};
