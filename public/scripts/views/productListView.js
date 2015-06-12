/*globals window,console,document*/
define(function(require){
	
	require('backbone');
	require('backboneAutocomplete');

	var ProductList = require('../collections/productList');

	var ProductListView = Backbone.View.extend({

		initialize:function(){

			this.productCollection = new ProductList();
			this.collectionFetched = false;

			new AutoCompleteView({
				input: $("#searchBox"),
				model: this.productCollection,
				onSelect: function (model) {
					//$("#selected").show().find("p").html(model.label());
					console.log((model.label()));
				}
			}).render();


		}
	});

	return ProductListView;
});