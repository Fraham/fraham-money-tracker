angular.module('MainCtrl', [])
    .controller('MainController', ['$scope', 'CashFlowService', 'socket', function ($scope, CashFlowService, socket) {

        var onSuccessGetAll = function (response) {
            $scope.cashFlows = response.data.cashFlow;
        };

        var onErrorGetAll = function (err) {
            console.log("Call to get missing all failed");
            console.log(err);
        };

        //init
        CashFlowService.getAll()
            .then(onSuccessGetAll, onErrorGetAll);

        socket.on('cashFlow create', function (cashFlow) {
            $scope.cashFlows.push(cashFlow);
            $scope.$apply()
        });
    }]);