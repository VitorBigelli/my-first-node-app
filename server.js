// Add Express to the project
var express = require('express');

// Create an Express app object
var app = express(); 

// Instruct the express app to listen on port 3000,
// and print a message when the server start running
app.listen(3000, function() {
	console.log("Server is listening on port 3000");
})

// 
app.get(`/`, function(request, response) {
	response.send('Return the index page');
});

app.get("/messages", function(request, response) {
	response.send('Return a list of all stored messages');
});

app.post("/messages", function(request, response) {
	response.send('Store a new message');
});

app.delete("/message", function(request, response) {
	response.send('Delete a specific message');
});

