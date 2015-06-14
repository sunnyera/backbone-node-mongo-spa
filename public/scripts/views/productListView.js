/*globals window,console,document*/
define(function(require){
    
    var _           = require('underscore');

	require('backbone');
	require('jqueryUi');

	var ProductView = require('../views/productView');
	var template = require('text!../../templates/productListView.tpl');

	var ProductListView = Backbone.View.extend({

		events:{
			'focus #searchBox': 'getAutocomplete',
    		'keydown #searchBox': 'fetchCollection'
		},

		initialize:function(params){

			var that = this;

			this.collection = params.collection;
			this.productNamesArray = params.productNamesArray;

			this.collectionFetched = false;

			this.listenTo(this.collection, 'add', function(item){
                that.productNamesArray.push(item.get('productName'));

            });

            this.listenTo(this.collection, 'remove', function(item){
                var idx = that.productNamesArray.indexOf(item.get('productName'));
                if (idx > -1) {
				    that.productNamesArray.splice(idx, 1);
				}
            });


		},
		render:function(){
			this.$el.html(template);
			return this.$el ;
		},
	    fetchCollection: function() {
	      if (this.collectionFetched) return;	      
		      this.collection.fetch();
		      this.collectionFetched = true;

	    },
	    getAutocomplete: function () {
	    	var that = this;
	      	this.$("#searchBox").autocomplete({
	        	source: this.productNamesArray,//JSON.stringify(this.collection)
	        	select: function(e,ui){
	        		var model = that.getModelByName(ui.item.value);
	        		var view =  new ProductView({model:model,collection:that.collection});
	        		vent.trigger('product:show');
	        	}
	      	});
	    },

	    getModelByName:function(productName){
	    	var resultModel = this.collection.find(function(model) { return model.get('productName') == productName; });
	    	return resultModel;
	    },
	    updateViewValues:function(){

	    }

	});

	return ProductListView;
});