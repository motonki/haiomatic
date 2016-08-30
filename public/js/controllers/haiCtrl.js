angular.module('haiCtrl', [])
	
	.controller('haiController', function($scope, $http, Hais) {
		$scope.players = {"p1": "", "p2":"", "p3": "", "p4": ""};

		$scope.setNames = function() {
			Hais.setNames($scope.players)
				.success(function(data) {
				});
		};


});
