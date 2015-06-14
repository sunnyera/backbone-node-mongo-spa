requirejs.config({
  shim: {

	    jquery: {
	      exports: '$'
	    },
	    underscore:{
	        exports: '_'
	    },
	    backbone:{
	        deps    : ['jquery', 'underscore'],
	        exports : 'Backbone'
	    },
	    backboneAutocomplete:{
	    	deps : ['backbone']
	    },
	    jqueryUi:{
	    	deps:  ['jquery']
	    },
	    backboneValidate:{
	    	deps: ['backbone']
	    }

	},

	paths: {
	  //env         : 'environment/local',
	  
	  jquery      : 'libs/jquery',
	  underscore  : 'libs/underscore',
	  backbone    : 'libs/backbone',
	  text        : 'libs/require-text',
	  backboneAutocomplete: 'libs/backbone.autocomplete',
	  jqueryUi    : 'libs/jquery-ui.min',
	  backboneValidate: 'libs/backbone-validation-amd-min'

	}

});

//requiring the main.js initializes the app
require(['router','main'],function(Router){
			Router.initialize();
});
