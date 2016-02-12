mainModule.controller('customClickCtrl',['$scope','$uibModal',function($scope,$uibModal){
	$scope.footerContent = '';
	$scope.footerAboutMe = function(){
		$scope.footerContent = 'You have clicked About Me link from footer';
		var modalInstance = $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'app/template/modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                resolve: {} // empty storage
            });

            modalInstance.result.then(function() {


            }, function() {

            });
	}
	$scope.footerContactUs = function(){
		$scope.footerContent = 'You have clicked Contact Us link from footer';
		var modalInstance = $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'app/template/modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                resolve: {} // empty storage
            });

            modalInstance.result.then(function() {


            }, function() {

            });
	}
}]);

