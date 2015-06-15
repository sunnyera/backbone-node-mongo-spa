# backbone-node-mongo-spa
simple product search single page app


## before starting, 
	'npm install' from the project directory.
	make sure mongoDb is installed and its service is running in background


	you can find the app root running on localhost:3000
	(these settings can be changed from app.js)

	### Database :
	 mongoDb

	### Server side: (./server directory)
	 nodeJs
	 mongoose(ODM for mongo)
	 express (to handle CRUD requests)

	### Client side : (./public directory)
	 backbone Js
	 requireJs (amd)
	 jquery


#DOC

	server contains a mogoose model for "Product" which is mapped to a mongo database.

	public directory contains client side code .

	### inside public directory :
		* index.html is served from the server
		* require.js and rjsconfig.js (requirejs config file) is the first to load with index.html
		* rjsconfig instantiates the backbone app(main.js) and starts "Backbone Router"


	### inside ./public/scripts
		* init function in main.js loads on document.ready. init instantiates all neccessary model , views and collection
		* ./libs contains libraries required
		* ./models backbone model for "product"
		* ./collections contains backbone collection module for the "product" model
		
		####./Views
			
			* difault view (HOME tab) is productView
			separate model+view combination is created dynamically for each product.
			PUT request are used to edit few attributes of the current model and update the DB.

			* productListView is a collectionview . it is used in product search box which contains backbone collection of models. this decides which model should be displyed in productView . models are fetched using GET request

			* addProductView (EDIT tab) contains a form that is used to create new models and POST it to the server .

	styles and templates folders are self explanatory


#toDo
	use grunt tasks(obfuscate , compress etc);
	use bower for packages (currently in ./public/scripts/libs);
	unique productName/productId in DB
	use less for styles


