
var vehicleCtrlFn = function ($scope) {
    $scope.year = "2016";
    $scope.make = "Audi";
    $scope.model = "A5";
    this.year = "2016"

    $scope.DisplayContent = function () {
        console.log($scope.year);
        console.log($scope.make);
        console.log($scope.model);
    }
    //var year = 2016;
    //var make = "Audi";
    //var model="A5"
};

angular.module('dealAVehicle')
    .controller("vehicleCtrl", vehicleCtrlFn);
       