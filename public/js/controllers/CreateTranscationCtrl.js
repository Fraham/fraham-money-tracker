angular.module('CreateTranscationCtrl', [])
    .controller('CreateTransactionController', ['$scope', 'CashFlowService', function ($scope, CashFlowService) {
        //init
        $scope.description = "";
        $scope.category = "";
        $scope.amount = "";


        var onCreateSuccess = function(response){
            $scope.error = null;
            $scope.description = "";
            $scope.category = "";
            $scope.amount = "";
        };

        var onCreateFailure = function(response){
            $scope.error = response;
        };

        $scope.createTransaction = function(){
            CashFlowService.create($scope.description, $scope.category, $scope.amount, Date.now())
                .then(onCreateSuccess, onCreateFailure);
        }
    }]);