mainModule.directive('customClick',function() {
	return {
		restrict : 'A',
		link : function(scope,element,attribute) {
			console.log(scope);
			$(element).bind('click',function(){
				console.log('Clicked Me');
			});
		}
	}
});

mainModule.directive('ngEnter',function() {
	return {
		restrict : 'AE',
		link : function(scope,element,attrs){
			$(element).bind('keydown',function(e) {
				if(e.keyCode == 13){
					//scope.validateMe();
					scope.$apply(function() {
						scope.$eval(attrs.ngEnter);
					});
				}
			});
		}
	}
});

mainModule.directive('ngFooterAboutClick',function(){
	return {
		restrict : 'AE',
		controller : 'customClickCtrl',
		link : function(scope,element,attrs){
			$(element).bind('click',function(){
				scope.$apply(function(){
					scope.$eval(attrs.ngFooterAboutClick);
				})
			})
		}
	}
});