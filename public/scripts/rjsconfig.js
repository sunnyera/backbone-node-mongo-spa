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
	    }

	},

	paths: {
	  //env         : 'environment/local',
	   
	  jquery      : 'libs/jquery',
	  underscore  : 'libs/underscore',
	  backbone    : 'libs/backbone',
	  text        : 'libs/require-text',
	  backboneAutocomplete: 'libs/backbone.autocomplete'

	}

});

//initialize
require(['main']);