/*globals window,console,document*/

define(function(require){

	require('backbone'); 

	var Product = Backbone.Model.extend({
		
		idAttribute: "_id",

		defaults:{
			productId:0,
			quantity:0,
			productName:'',
			costPrice:0,
			sellingPrice:0
		},

		urlRoot: '/product',

		validation: {
		    productName: {
		      required: true,
		       msg: 'Please enter a valid product name'
		    },
		    quantity:{
		    	min:1,
		    	msg:'please enter valid quantity'
		    },
		    productId: {
		      required: true,
		       msg: 'Please enter a valid product id'
		    },
		    costPrice:{
		    	required:true,
		    	msg: 'please enter valid cost price'
		    },
		    sellingPrice:function(value,attr,computedState){
		    	if(value < this.get('costPrice')){
		    		return 'selling price should be more than cost';
		    	}
		    }
		}

	});

	return Product;
});