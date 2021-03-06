var app = angular.module('moneyTrackerApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'CashFlowService', 'CreateTranscationCtrl'])

app.factory('socket', ['$rootScope', function($rootScope) {
  var socket = io.connect();

  return {
    on: function(eventName, callback){
      socket.on(eventName, callback);
    },
    emit: function(eventName, data) {
      socket.emit(eventName, data);
    }
  };
}]);