/*globals window,console,document*/
define(function(require){

	require('jquery');
	require('underscore');
	require('backbone');
	require('backboneValidate');


    window.vent = _.extend({},Backbone.Events);

    var Product = require('models/product');
	var ProductView = require('views/productView');
	var AddProductView = require('views/addProductView');
	var ProductList = require('collections/productList');
	var ProductListView = require('views/productListView');

	var template = require('text!../templates/container.tpl');

	function init(){
		var that = this;

		$('.container').append(template);

		//for autocomplete
		this.productNamesArray = [];

		//model
		this.product = new Product();
		//collection
		this.productCollection = new ProductList();
		//view
		this.productView = new ProductView({
			model:this.product,
			collection:this.productCollection
		});
		//collection View
		this.productListView = new ProductListView({
			collection: this.productCollection,
			productNamesArray: this.productNamesArray
		});
		var searchbox = this.productListView.render();
		$('.searchBoxDiv').append(searchbox);

		//add new product view
		vent.on('product:add',function(){
			addNewProductShow(that.productCollection);
		});

		validateBackBone();

	}

//add a new product : edit tab
	function addNewProductShow(productCollection){

	    $('.searchBoxDiv').hide();

	    $('.editMenu').addClass('active');
	    $('.homeMenu').removeClass('active');

	    $('.productInfo').html('');

	    this.product = new Product();
		this.addProductView = new AddProductView({
			collection: productCollection,
			model:product
		});

		var newProductView = this.addProductView.render();

	    $('.productInfo').html(newProductView);
	}

	// validator
	function validateBackBone(){
      _.extend(Backbone.Validation.callbacks, {
          valid: function (view, attr, selector) {
              var $el = view.$('[name=' + attr + ']'), 
                  $group = $el.closest('td');
              
              $group.removeClass('has-error');
              $group.find('.help-block').html('').addClass('hidden');
          },
          invalid: function (view, attr, error, selector) {
              var $el = view.$('[name=' + attr + ']'), 
                  $group = $el.closest('td');
              
              $group.addClass('has-error');
              $group.find('.help-block').html(error).removeClass('hidden');
          }
      });

    }

	$(document).ready( init );
});