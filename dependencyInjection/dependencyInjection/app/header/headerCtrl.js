var ctrlFn = function ($scope, CONSTANTS) {
    function init() {
        $scope.headerTemplate = CONSTANTS.HEADER_TEMPLATE;

        
    }

    $scope.loadDynamicView = function (viewName) {
        if (viewName == 'login') {
            $scope.loadTemplate = CONSTANTS.LOGIN_TEMPLATE;
        }
    }

    init();
};
header.controller('headerCtrl', ['$scope','APP_CONSTANTS', ctrlFn]);