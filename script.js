const { text } = require("express");

function calc(values){
    document.getElementById("text-screen").value+=values;
}

function clrscr(){
    document.getElementById("text-screen").value="";
}
function equalClick(){
    var text=document.getElementById('text-screen').value;
    var  result=eval(text);
    document.getElementById("text-screen").value=result;

}



