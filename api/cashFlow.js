var CashFlow = require('../app/models/cashFlow');
var Server = require('../server');

exports.create = function (req, res) {
    var cashFlow = new CashFlow();

    cashFlow.description = req.body.description ? req.body.description : "";
    cashFlow.category = req.body.category ? req.body.category : "";
    cashFlow.amount = req.body.amount ? req.body.amount : 0;
    cashFlow.purchaseDate = req.body.purchaseDate ? req.body.purchaseDate : Date.now();

    cashFlow.save(function (err) {
        if (err) {
            res.json({ error: err });
        }
        else {
            Server.io.sockets.emit('cashFlow create', cashFlow);
            res.json(cashFlow);
        }
    });
}

exports.update = function (req, res) {

}

exports.delete = function (req, res) {

}

exports.list = function (req, res) {
    CashFlow.find(function (err, cashFlows) {
        if (err) return res.json({ error: err });
        res.json({ cashFlow: cashFlows });
    })
}