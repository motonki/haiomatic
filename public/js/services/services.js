angular.module('HaiService', []).factory('Hais', ['$http', function($http) {

	var names = {};

	return {

		setNames: function(data) {
			names = data;
		},
		getNames: function() {
			return names;
		},
		get : function() {
			return $http.get('/api/accounts');
		},

		add : function(accData) {
			return $http.post('/api/accounts', accData);
		},

		delete : function(id) {
			return $http.delete('/api/nerds/'+ id);
		}
	}
}]);