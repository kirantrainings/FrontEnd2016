

function displayVehicleDetails(year,make,model){
    var yearInIntegers= parseInt(year);
    if(isNaN(year)){
        console.log("Vehicle year is not a Number");
    }
    else if (year===2015 && (make==="Audi"&& model==="A5")){
        console.log("This is a latest Model Audi");
    }
    else if(year == undefined){
        console.log("Vehicle year is undefined");
    }
    else{
        console.log("Vehicle year is"+year);
    }
}

displayVehicleDetails(2015,"Benz","A5");