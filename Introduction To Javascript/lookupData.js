function getYearList(currentYear){
    var yearList =[];
    for(var i=currentYear-10;i<=currentYear;i++){
        console.log(i);
        yearList.push(i);
    }
    return yearList;
};

function getDates(month){
    var dates =[];
    
    for(var i=1;i<=31;i++){
        if(month==="Jan"||month==="Mar"
           ||month=="May"||month==="July"
          ||month==="Aug"||month==="Oct"||month==="Dec"){
            dates.push(i);
        }
        else if(month==="Feb"){
            if(i<=28){
                dates.push(i);
            }
        }
    }
    
    return dates;
}

getYearList(2016);

getDates("Jan");