var express = require('express'),
	bodyParser = require('body-parser'),
	compression = require('compression'),
	app = express(),
	mongoose = require('mongoose'),
	Product = require('./server/Product');

	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	}));

	app.use(compression()); //compress all requests

//static files folder 
	app.use(express.static(__dirname + '/public'));


//DB
	mongoose.connect('mongodb://localhost/test'); //productsDB
	var db = mongoose.connection;

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
		console.log('Database Connected');  
	});


//REST
	//root
	app.get('/',function(req,res){
		res.sendFile(__dirname + '/public/index.html');
	});
	//read
	app.get('/product/:id',function(req,res){
		Product.findById(req.param.id,function(err,doc){
			res.send(doc);
		});
	});
	//create
	app.post('/product', function(req, res) {
		var product = new Product(req.body);
		product.save(function(err,product){
			if(err) res.send('something went wrong: ' + err);
			res.send(product);
		});
	    // ...
	});
	//update
	app.put('/product/:id',function(req,res){

		var query = {'productId':req.body.productId};
		Product.findOneAndUpdate(query, req.body, {multi:true}, function(err, doc){
		    if (err) return res.status(500).send( err );
		    return res.send(doc);
		});

	});
	//read/get all
	app.get('/products',function(req,res){
		Product.find({},function(err,doc){
			res.send(doc);
		})
	});

//server
	var server = app.listen(3000, function () {

	  var host = server.address().address;
	  var port = server.address().port;

	  console.log('The app listening at http://%s:%s', host, port);

	});

