/*globals window,document,console*/
define(function(require) {

  require('underscore');
	require('backbone');
	require('jquery');

	var template = require('text!../../templates/addProductView.tpl');
  var Product = require('../models/product');

  	var AddProductView = Backbone.View.extend({

      events:{
        'click .addProduct':'addNewProduct'
      },

    	initialize:function(params){
  		
          this.collection = params.collection;
          this.model = params.model;

          Backbone.Validation.bind(this ,{
            model: this.model
          });

    	},

    	render:function(){
    		  this.$el.html(template);
          return this.$el;
    	},

      addNewProduct:function(e){
            e.preventDefault();
            var $inputs = $('#productForm :input');
            var values = {};
            $inputs.each(function() {
                var key = this.name
                if(key) values[this.name] = $(this).val();
            });
            this.model.set(values);

            if(this.model.isValid(true)){
                // this.model.save();
                this.model.save();
                this.collection.add(this.model);
                vent.trigger('product:add');
                alert('New Product Created');
            }


       }

  });

  return AddProductView;
});