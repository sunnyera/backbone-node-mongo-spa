/*globals console,window*/
define (function(require){


    require('underscore');
    require('backbone');

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '':'showProduct',
      'showProduct': 'showProduct',
      'addProduct' : 'addProduct',
      '*actions': 'defaultAction'

    },

    defaultAction : function(actions){
    	 console.log('No route:', actions);
    },

  	showProduct: function(){
  	   	vent.trigger('product:show');
  	},

    addProduct:function(){
        vent.trigger('product:add');
    }

  });

  var initialize = function(){

    var app_router = new AppRouter;
    Backbone.history.start();
  };
  
  return {
    initialize: initialize
  };


});