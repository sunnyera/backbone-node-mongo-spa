define(function(require){

	require('backbone');

	var Product = require('../models/product');

	var ProductList = Backbone.Collection.extend({
    
		model: Product,
		url:'http://localhost:3000/products'
    	//url: 'http://localhost:8080/products'

	});

	return ProductList;
});
