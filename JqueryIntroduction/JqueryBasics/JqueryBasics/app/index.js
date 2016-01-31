

$(document).ready(function () {
    //javascript 
    

    //jquery

    //Id Selector
    var jqtxtItemPrice = $("#txtItemPrice");
    var txtItemPrice = document.getElementById("txtItemPrice");

    //jquery tag based Selector
    var inputTags = $("input");
    var inputTagsJavascript = document.getElementsByTagName("input");

    //class based Selector
    var classBasedInput = $(".myClass");
    var classSelectorJavascript = document.getElementsByClassName("myClass");


    //WriteToElement
    //Set
    jqtxtItemPrice.val("2000");

    //get
    var price = jqtxtItemPrice.val();
    console.log(price);
    
    
});