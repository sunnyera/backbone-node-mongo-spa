define(function(require){

	require('backbone'); 

	var Product = Backbone.Model.extend({
		
		defaults:{
			name:''
			// productId:0,
			// Quantity:0,
			// ProductName:'',
			// CostPrice:0,
			// SellingPrice:0
		},

		label:function(){
			return this.get("name");
		}


	});

	return Product;
});