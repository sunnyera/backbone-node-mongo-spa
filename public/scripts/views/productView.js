define(function(require) {

	require('backbone');
	require('jquery');

	var template = require('text!../../templates/productView.tpl');

  	var ProductView = Backbone.View.extend({

  	initialize:function(params){
		
		this.render();

		this.model = params.model;
        vent.on('product:show',this.showProduct,this);

  	},
  	render:function(){
  		this.$el.html(template);
  	},
    showProduct: function(){
        $('.productInfo').html(this.$el);
    }

  });

  return ProductView;
});