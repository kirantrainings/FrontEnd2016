var headerfun = function($scope,CONSTANTS) {
	function init(){
		$scope.headerTemplate = CONSTANTS.HEADER_TEMPLATE;
	}
	init();
};

header.controller('headerController',['$scope','APP_CONSTANTS',headerfun]);