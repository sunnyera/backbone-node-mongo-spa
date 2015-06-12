/*globals console,window*/
define (function(require){


    require('underscore');
    require('backbone');

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '':'showIndex',
      'home':'showIndex',
      'product': 'showProduct',
      '*actions': 'defaultAction'

    },

    defaultAction : function(actions){
    	 console.log('No route:', actions);
    },
    showIndex:function(){
        vent.trigger('home:show');
    },

  	showProduct: function(){
  	   	vent.trigger('product:show');
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