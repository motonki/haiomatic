var mongoose = require('mongoose');

module.exports = mongoose.model('accounts', {
	name : {type : String, default: ''},
	balance : {type : Number, default: 0.0 }
});