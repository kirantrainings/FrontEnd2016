var execture = function($scope){
	$scope.hello = [
		{"menu":"Home",value:"This is home page","cssClass":"active"},
		{"menu":"Cars",value:"This is About Me page","cssClass":":",
																	"dropdown": [
																	"New Cars",
																	"Used Cars",
																]
		}
	];
	
	$scope.displayContent = function(contentType,menu) {
		$scope.content = contentType;
		$scope.menu = menu;
		
		angular.forEach($scope.hello,function(item){
				if(item.value == contentType) {
					if(item.dropdown){
						item.cssClass = "active dropdown";
					}
					else	item.cssClass = "active";
				}
				else item.cssClass = "";
		
		});
	}
	
	
};

mainModule.controller('vechiController',execture);

