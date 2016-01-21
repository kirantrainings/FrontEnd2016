function submitForm(){
	
}

function fnameLoad(e){
	console.log(e.keyCode);
}

$(document).ready(function() {
	$('#btnSubmit').prop("disabled", true)
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
	});
	
$('#fname, #lname, #country, #state, #phnumb, #age').keyup(action);
	
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

	
function action(){
	var fname = $("#fname").val().length;
	var lname =  $("#lname").val().length;
	var age =  $("#age").val().length;
	var country = $("#country").val().length;
	var state =  $("#state").val().length;
	var phone =  $("#phnumb").val().length;
	if(fname>0 &&lname>0 && age>0 && country>0 && state>0 && phone >0){
		$('#btnSubmit').prop("disabled", false);
	}
	else $('input[type="button"]').prop("disabled", true);
}
