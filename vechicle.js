(function(vechileStore){
	var vechicle = [{"Year":"2009","Make":"Honda", "Model":"SUV", "Price":"2000"},
				{"Year":"2010","Make":"Hundai", "Model":"Mini Van", "Price":"5000"},
				{"Year":"2011","Make":"Toyota", "Model":"Sedan", "Price":"2000"}
			   ];
	vechileStore.getAllVechicles = function() {
		return vechicle;
	}
}(window.vechileStore = {}))


$(document).ready(function(){
	var vechicle = vechileStore.getAllVechicles();
	var divObj = document.getElementById("tableDiv");
	var table = document.createElement("TABLE");
	table.setAttribute("id","tableVechi");
	table.setAttribute("class","table table-bordered");
	divObj.appendChild(table);
	var header = document.createElement("TH")
	var trow1 = document.createElement("TR");
	trow1.setAttribute("id","trow1");
	document.getElementById("myTable").appendChild(trow1);
	var tcol0 = document.createElement("TD");
	var tcol1 = document.createElement("TD");
	var tcol2 = document.createElement("TD");
	var tcol3 = document.createElement("TD");
	var tcol4 = document.createElement("TD");
	

//var vechileAppend = function(column) {
	
		for(var i = 0; i<vechicle.length;i++){
			$("#myTable").append("<tr>"
								 +"<td>"+(i+1)+"</td>"
								 +"<td>"+vechicle[i].Year+"</td>"
								 +"<td>"+vechicle[i].Make+"</td>"
								 +"<td>"+vechicle[i].Model+"</td>"
								 +"<td>$"+vechicle[i].Price+"</td>"
								 +"</tr>")
		}
	
		
	
//}

});