var loginCtrlFn = function($scope,loginFactory) {
	loginFactory.then(function(respone) {
		$scope.vechicleDetails = respone.data.Vechicles;
		
	});
	$scope.loginBtn = function(uname, pass){
		$scope.fullName = {name : "",
						  address : "My Address"};
			loginFactory.then(function(response){
				$scope.loginCredentials = response.data.loginCredentials;
				var breakLoop = true;
				$scope.loginSuccess = false;
				angular.forEach($scope.loginCredentials,function(item){
					if(breakLoop){
						if(item.userName == uname){
							if(item.password == pass){
							$scope.fullName = {
								name : item.fullName,
						  		address : "Los Angeles"
							};
								breakLoop = false;
							}
							else breakLoop = true;
						}
						else breakLoop = true;	
					}
					
				});
				if(!breakLoop){
					$scope.successMessage = "Logged in successfully";
					$scope.errorMessage="";
					$scope.uname='';
					$scope.pass='';
				}
				else {
					$scope.errorMessage = 'Sorry! UserName / Password is wrong';
					$scope.successMessage = "";
				}
			});
	};
	
	$scope.validateMe = function(){
		console.log('You Pressed Enter');
	}

};
mainModule.controller('loginCtrl',['$scope','loginFactory',loginCtrlFn])