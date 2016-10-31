var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CashFlowSchema   = new Schema({
    description : String,
    category : String,
    amount : Number,
    purchaseDate : { type: Date, default: Date.now() }
});

module.exports = mongoose.model('cash_flows', CashFlowSchema);