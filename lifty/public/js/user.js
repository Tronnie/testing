// When the page loads, grab and display all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("workoutsToDate");

      row.append("<p>" + data[i].name + " lifts... </p>");
      row.append("<p>" + data[i].totalReps + "</p>");
      row.append("<p>At " + moment(data[i].workoutTime).format("h:mma on dddd") + "</p>");

      $("#workout-area").prepend(row);

    }

  }

});

// When user submits (clicks submitBtn)
$("#submit-btn").on("click", function(event) {
  event.preventDefault();
  console.log("clicked!")
  // Make a workout object
  var newWork = {
    name: $("#name-submit").val().trim(),
    exercise: $("#exercise-submit").val().trim(),
    weight: $("#weight-submit").val().trim(),
    reps: $("#reps-submit").val().trim(),
    sets: $("#sets-submit").val().trim(),
    workoutTime: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newWork);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newWork)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("pumps");

      row.append("<p>" + newWork.name + " exercised: </p>");
      row.append("<p>" + newWork.exercise + "</p>");
      row.append("<p>with " +
      row.append("<p>" + newWork.weights+ "</p>");
      row.append("<p>this many times " +
      row.append("<p>" + newWork.reps+ "</p>");
      row.append("<p>At " +
     moment(newWork.workoutTime).format("h:mma on dddd") + "</p>");

      $("#workout-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#exercise").val("");
  $("#weight").val("");
  $("#reps").val("");
  $("#sets").val("");
});
