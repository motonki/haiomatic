angular.module('laskuCtrl', [])
	.controller('laskuController', function($scope, $http, Hais) {
		$scope.rounds = [
			{"r": "3-3", "p1":0,"p2":0,"p3":0,"p4":0},
			{"r": "3-4", "p1":0,"p2":0,"p3":0,"p4":0},
			{"r": "4-4", "p1":0,"p2":0,"p3":0,"p4":0},
			{"r": "3-3-3", "p1":0,"p2":0,"p3":0,"p4":0},
			{"r": "3-3-4", "p1":0,"p2":0,"p3":0,"p4":0},
			{"r": "3-4-4", "p1":0,"p2":0,"p3":0,"p4":0},
			{"r": "4-4-4", "p1":0,"p2":0,"p3":0,"p4":0}
		];
		$scope.players = {};

		$scope.players = Hais.getNames();

		$scope.getSum = function(num) {
		      var total=0;
		      var list = [{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}];
		      if(num == 0) {
		      	for(var i=0; i<$scope.rounds.length; i++){
				      list[i].value = $scope.rounds[i].p1;
				    }
		      }
		      else if(num == 1) {
		      	for(var i=0; i<$scope.rounds.length; i++){
				      list[i].value = $scope.rounds[i].p2;
				    }
		      }
		      else if(num == 2) {
		      	for(var i=0; i<$scope.rounds.length; i++){
				      list[i].value = $scope.rounds[i].p3;
				    }
		      }
		      else if(num == 3) {
		      	for(var i=0; i<$scope.rounds.length; i++){
				      list[i].value = $scope.rounds[i].p4;
				    }
		      }
		      angular.forEach(list , function(item){
		        total+= parseInt(item.value);
		      });

		    return total;

		};		 	
});

     