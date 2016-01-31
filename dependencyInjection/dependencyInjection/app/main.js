

 var main = angular.module('main',
    ['common',
     'header',
     'login',
     'register',
    'newcars',
    'usedcars']
    );

 main.config(function () {
     console.log('main module');
 });


