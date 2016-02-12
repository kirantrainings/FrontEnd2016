mainModule.directive('customVechicleDetails',function() {
	var fullNameDirective = {};
	fullNameDirective.template = '<div ng-repeat="vechi in  vechicleDetails">Vechicle Model: {{vechi.Model}} <b> Year</b>: {{vechi.Year}}</div>';
	fullNameDirective.restrict = 'C';
	return fullNameDirective;
});

mainModule.directive('headerNav',function() {
	var headerNavDirective = {};
	headerNavDirective.templateUrl = 'nav.tpl.html';
	return headerNavDirective;
});