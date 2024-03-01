const text = document.getElementById("text");

function dplay(input){
    text.value += input;
}
function dclear(){
    text.value="";
}
function dcalculate(){
try {
    text.value=eval(text.value);
} catch (error) {
    text.value="Error";
}
}
function dlete(){
    text.value=text.value.slice(0,-1);
}