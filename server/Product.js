var mongoose= require('mongoose');

var products = new mongoose.Schema({

	productId : String,
	productName: String,
	quantity: Number,
	costPrice: Number,
	sellingPrice: Number

})

var Product = mongoose.model('Product',products);

module.exports = Product;