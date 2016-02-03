var vechilFunction = function($scope) {
	$scope.selectedType = [];
	$scope.priceRange = [];
	$scope.vechicle =[  
   {  
      "Year":"2009",
      "company":{  
         "id":1,
         "Make":"Honda"
      },
      "Model":"SUV",
      "Price":"400000",
      "img":"images/01.jpg",
      "type":"Used"
   },
   {  
      "Year":"2010",
      "company":{  
         "id":2,
         "Make":"Hundai"
      },
      "Model":"Mini Van",
      "Price":"500000",
      "img":"images/02.jpg",
      "type":"Used"
   },
   {  
      "Year":"2011",
      "company":{  
         "id":3,
         "Make":"Toyata"
      },
      "Model":"Sedan",
      "Price":"504000",
      "img":"images/03.jpg",
      "type":"New"
   },
   {  
      "Year":"2015",
      "company":{  },
      "Model":"Mini Van",
      "Price":"304000",
      "img":"images/04.jpg",
      "type":"New"
   },
   {  
      "Year":"2013",
      "company":{  
         "id":5,
         "Make":"Tata"
      },
      "Model":"Sedan",
      "Price":"210500",
      "img":"images/05.jpg",
      "type":"Used"
   },
   {  
      "Year":"2012",
      "company":{  
         "id":6,
         "Make":"Maruthi"
      },
      "Model":"Hatchback",
      "Price":"302000",
      "img":"images/06.jpg",
      "type":"New"
   },
   {  
      "Year":"2001",
      "company":{  
         "id":7,
         "Make":"Mahendra"
      },
      "Model":"Sedan",
      "Price":"202500",
      "img":"images/07.jpg",
      "type":"New"
   },
   {  
      "Year":"2007",
      "company":{  
         "id":8,
         "Make":"Benz"
      },
      "Model":"Convertible",
      "Price":"500200",
      "img":"images/08.jpg",
      "type":"New"
   },
   {  
      "Year":"2006",
      "company":{  
         "id":3,
         "Make":"Toyata"
      },
      "Model":"Hatchback",
      "Price":"301500",
      "img":"images/01.jpg",
      "type":"Used"
   },
   {  
      "Year":"2005",
      "company":{  
         "id":2,
         "Make":"Hundai"
      },
      "Model":"Mini Van",
      "Price":"623000",
      "img":"images/01.jpg",
      "type":"Used"
   },
   {  
      "Year":"2001",
      "company":{  
         "id":6,
         "Make":"Maruthi"
      },
      "Model":"Sedan",
      "Price":"202500",
      "img":"images/01.jpg",
      "type":"New"
   },
   {  
      "Year":"2012",
      "company":{  
         "id":1,
         "Make":"Honda"
      },
      "Model":"Convertible",
      "Price":"405000",
      "img":"images/01.jpg",
      "type":"Used"
   },
   {  
      "Year":"2011",
      "company":{  
         "id":7,
         "Make":"Mahendra"
      },
      "Model":"Sedan",
      "Price":"352500",
      "img":"images/01.jpg",
      "type":"New"
   }
];

	$scope.vechicleType = [{"type":"New"},
						  {"type":"Used"}
						  ];
	
	$scope.setSelectedType = function() {
		console.log("entered");
		$scope.selectedType=[];
		var type = this.type.type;
		$scope.selectedType.push(type);
		return false;
	};
	
	 $scope.allType = function () {
        $scope.selectedType = [];
    };
	
	$scope.submit = function() {
		if($scope.addYear && $scope.addMake && $scope.addModal && $scope.addPrice && $scope.addType){
			$scope.vechicle.push({ "Year":this.addYear,
							  "company":{  
								 "id":7,
								 "Make":this.addMake
							  },
							  "Model":this.addModal,
							  "Price":this.addPrice,
							  "img":"images/01.jpg",
							  "type":this.addType});
			$scope.addYear = "";
			$scope.addMake = "";
			$scope.addModal = "";
			$scope.addPrice = "";
			$scope.addType = "";
		}
		
	};
	$scope.sortByPrice = function(selectedRange) {
			$scope.priceRange =[];
			$scope.priceRange.push(selectedRange);
			return false;
	};
	
};





mainModule.controller('vechicleController',vechilFunction);

mainModule.filter('typeFilter',[function() {
	
	return function(vechicle, selectedType){
		if(!angular.isUndefined(vechicle) && !angular.isUndefined(selectedType) && selectedType.length>0){
			var tempType = [];
			angular.forEach(selectedType, function(type) {
				angular.forEach(vechicle, function(vechi) {
					if(angular.equals(vechi.type,type)) {
						tempType.push(vechi);
					}
				});
			});
			return tempType;
		} else{
			return vechicle;
		}
	}
}]);


mainModule.filter('priceFilter',[function() {
	return function(vechicle,priceRange) {
		if(!angular.isUndefined(vechicle) && !angular.isUndefined(priceRange) && priceRange>0){
			var tempPrice = [];
			angular.forEach(priceRange, function(priceIn) {
				angular.forEach(vechicle, function(vechi) {
					if(priceIn!=300001){
						if(priceIn>vechi.Price) {
						tempPrice.push(vechi);
						}
					}
					else{
						if(priceIn<vechi.Price) {
						tempPrice.push(vechi);
						}
					}
				});
			});
			return tempPrice;
			
		}
		else{
			return vechicle;
		}
	}
}]);