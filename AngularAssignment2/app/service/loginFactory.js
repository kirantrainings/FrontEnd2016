mainModule.factory('loginFactory', function($http){
	return  $http.get("app/data/data.json");
});