var mongoose = require("mongoose");

var connectionString = "mongodb://localhost/moogl";

mongoose.connect(connectionString);

mongoose.connection.on("connected", function(){

  console.log("Mongoose connected to " + connectionString);

});

mongoose.connection.on("error", function(error){

  console.log("Mongoose has returned with error: " + error);

});

mongoose.connection.on("disconnected", function(){

  console.log("Mongoose has disconnected from the database.");

});
