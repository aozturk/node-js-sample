var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var getIndexContent = function() {
	var data = fs.readFileSync("index.html");
	return data;
}

app.get('/', function(request, response) {
	var data = getIndexContent();
  	response.send(data.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  	console.log("Listening on " + port);
});
