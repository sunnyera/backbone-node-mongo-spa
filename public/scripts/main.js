define(function(require){

	require('jquery');
	require('underscore');
	require('backbone');

    window.vent = _.extend({},Backbone.Events);
    var Router = require('router');

    var Product = require('models/product');
	var ProductView = require('views/productView');
	var ProductListView = require('views/productListView');

	function init(){

		Router.initialize();

		this.product = new Product();

		this.productView = new ProductView({
			model: this.product
		});

		this.productListView = new ProductListView();


		vent.trigger('product:show');

	}

	$(document).ready( init );
});