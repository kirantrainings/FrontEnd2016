function addTextToLabels(){
   var getLabels = document.getElementsByTagName('label');
   var getDivTags = document.getElementsByTagName('div');
   var getBodyTags= document.getElementsByTagName('body');
    var getFirstName = document.getElementById('lblFirstName');
     
    console.log(getFirstName);
    console.log(getBodyTags[0]);
    for(var i=0;i<=getLabels.length;i++){
        console.log(getLabels[i]);
    }
    for(var j=0;j<=getDivTags.length;j++){
        console.log(getDivTags[j]);
    }
    
}

addTextToLabels();

function addTextToLabel(id,text){
    var ele= document.getElementById(id);
    ele.innerHTML=text;
}

addTextToLabel('lblFirstName',"kiran");
addTextToLabel('lblLastName',"PVS");

/*
1. get the elements by their ID.  ==> only one element
2. get the elements by name. ==> arrayOfElements
3. get the elements by the css class ==>arrayOfelements
4. get the elements by their tagname.==> array of elemnts.

tagname
.
#
*/