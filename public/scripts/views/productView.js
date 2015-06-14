define(function(require) {

	require('backbone');
	require('jquery');

	var template = require('text!../../templates/productView.tpl');

  	var ProductView = Backbone.View.extend({

      events:{

          'keydown #productName': 'updateAttributes',
          'keydown #sellingPrice': 'updateAttributes'

      },

    	initialize:function(params){

          this.model = params.model;
          this.collection = params.collection;
          var templateFunction = _.template(template);
          this.template = templateFunction({data:this.model.toJSON()});

          this.render();

          Backbone.Validation.bind(this ,{
            model: this.model
          });

          vent.on('product:show',this.showProduct,this);

    	},
    	render:function(){
    		  this.$el.html(this.template);
    	},
      showProduct: function(){

          $('.productInfo').html('');
          $('.productInfo').html(this.$el);

          $('.searchBoxDiv').show();

          $('.homeMenu').addClass('active');
          $('.editMenu').removeClass('active');

      },
      updateAttributes:function(e){

        if(e.keyCode == 13 && !this.model.isNew()){
            
            var updatedObj = {},
                that = this,
                newVal = $(e.target).val();

            if(e.target.id=='productName'){
                updatedObj = {productName:newVal};
            }
            else if(e.target.id=='sellingPrice'){
                updatedObj = {sellingPrice:newVal};
            }


          this.model.save(updatedObj,
              {
                success :function(m){
                    that.collection.remove(m);
                    that.collection.add(that.model._previousAttributes);
                },
                error: function(err){
                  console.log('error: ' + err);
                }
              }
            );
        }
      }

  });

  return ProductView;
});