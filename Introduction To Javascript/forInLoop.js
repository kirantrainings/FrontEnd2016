function forInLoop(){
    
    var vehicle={
        year:2015,
        make: "Audi",
        model:"A5",
        price:"$20000"
    };
    var arrayData=["2015","asfdadsfsa","asfasfasfasf"]
    
    for(var veh in vehicle){
        console.log(veh);
    }
    
    for(var item in arrayData){
        console.log(item);
    }
}

forInLoop();