// Add Express to the project
var express = require('express');

// Create an Express app object
var app = express(); 

// Instruct the express app to listen on port 3000,
// and print a message when the server start running
app.listen(3000, function() {
	console.log("Server is listening on port 3000");
})