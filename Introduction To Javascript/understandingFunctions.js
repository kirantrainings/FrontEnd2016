//Function Syntax
//first approach-2

function displayPersonDetails(){
    var person ={};
    person.firstName="Kiran";
    person.lastName="PVS"
    person.age=30;
    console.log(person);
}


function displayVehicleDetails(year,make,model,VIN){
    var vehicle ={};
    if(year!=""){
        vehicle.year=year;
    }
    if(make!=undefined){
      vehicle.make=make;
    }
    vehicle.model=model;
    console.log(vehicle);
}
displayPersonDetails();
displayVehicleDetails("2012");


