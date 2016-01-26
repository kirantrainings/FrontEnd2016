
var searchFunc = function(searchValue){
	
			
			var vech = vechileStore.getAllVechicles();

			for(var i=0; i<vech.length; i++) {
				if(vech[i].Make == searchValue){
					$("#tableDiv").append("<span> Year: "+vech[i].Year+"</span><br>"
											 +"<span> Model: "+vech[i].Model+"</span><br>"
											 +"<span> Make: "+vech[i].Make+"</span><br>"
											 +"<span> Price: $"+vech[i].Price+"</span><br>");
					break;
				}
			}
		
}

	$("#searchId").keypress(function(e){
		if(e.which == 13){
		var searchValue = $("#searchId").val();
		searchFunc(searchValue);
		}
		
	});
		
