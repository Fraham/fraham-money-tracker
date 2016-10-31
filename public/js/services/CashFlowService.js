angular.module('CashFlowService', [])
    .factory('CashFlowService', ['$http', function ($http) {

        return {
            getAll: function () {
                return $http.get('/api/cashflow');
            },
            create: function (description, category, amount, purchaseDate) {
                var data = {

                    "description": description ? description : "",
                    "category": category ? category : "",
                    "amount": amount ? amount : 0,
                    "purchaseDate": purchaseDate ? purchaseDate : Date.now()
                };
                return $http.post('/api/cashflow', data);
            }
        }
    }]);