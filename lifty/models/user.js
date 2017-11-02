// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Lifty = sequelize.define("chirp", {
  name: {
    type: Sequelize.STRING
  },
  exercise: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.INTEGER
  },
  reps: {
    type: Sequelize.INTEGER
  },
  sets: {
    type: Sequelize.INTEGER
  },
  workoutTime: {
    type: Sequelize.DATE
  }
}, {
  timestamps: true
});

// Syncs with DB
Lifty.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Lifty;
