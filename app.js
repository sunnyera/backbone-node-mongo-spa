var express = require('express'),
	app = express();

	//static files folder 
	app.use(express.static(__dirname + '/public'));


	app.get('/',function(req,res){
		res.sendFile(__dirname + '/public/index.html');
	});

	app.get('/data',function(req,res){
		res.sendFile(__dirname + '/data.json');
	})

	var server = app.listen(3000, function () {

	  var host = server.address().address;
	  var port = server.address().port;

	  console.log('Example app listening at http://%s:%s', host, port);

	});

