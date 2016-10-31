angular.module('MainCtrl', [])
    .controller('MainController', ['$scope', 'CashFlowService', function ($scope, CashFlowService) {

        var onSuccessGetAll = function (res) {
            $scope.cashFlows = res.data.cashFlow;
        };

        var onErrorGetAll = function (err) {
            console.log("Call to get missing all failed");
            console.log(err);
        };

        CashFlowService.getAll()
            .then(onSuccessGetAll, onErrorGetAll);
    }]);