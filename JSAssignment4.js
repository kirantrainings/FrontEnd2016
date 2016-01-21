function submitForm(){
	
}

function fnameLoad(e){
	console.log(e.keyCode);
}

$(document).ready(function() {
	$("#fname").keypress(function(e){
		onlyCharecters(e);
	});
	$("#lname").keypress(function(e){
		onlyCharecters(e);
	});
	$("#country").change(function(){
		var vals = this.value;
		console.log(vals);
		if(vals=="US"){
			$("#state").append('<option value="AL">Alabama</option>'
								+'<option value="AK">Alaska</option>'
									+'<option value="AZ">Arizona</option>'
									+'<option value="AR">Arkansas</option>'
									+'<option value="CA">California</option>'
									+'<option value="CO">Colorado</option>'
								);
		}
		else if(vals=="IND"){
			$("#state").append('<option value="AP">Andra Pradesh</option>'
								+'<option value="BH">Bihar</option>'
									+'<option value="CH">Chandigar</option>'
									+'<option value="TN">Tamil Nadu</option>'
									+'<option value="KL">Kerala</option>'
									+'<option value="GA">GOA</option>'
								);
		}
	});
	$("#phnumb").keypress(function(e) {
		onlyNumbers(e);
	})
});
function onlyCharecters(event){
	var inputValue = event.which;
		console.log(inputValue);
        if((inputValue > 47 && inputValue < 58) && (inputValue != 32)){
            event.preventDefault();
        }
}

function onlyNumbers(event){
	var inputValue = event.which;
		console.log(inputValue);
        if(!(inputValue > 47 && inputValue < 58)){
            event.preventDefault();
        }
		   
}