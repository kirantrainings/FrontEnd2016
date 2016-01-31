$(document).ready(function () {
    bindEventListners();
});

var bindEventListners = function () {
    $('#txtAge').bind('keypress', calculateAge);
};

var calculateAge = function () {
    console.log("My Age is"+$(this).val())
};