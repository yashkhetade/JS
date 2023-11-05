function clicked(){
    console.log("clicked");
const no=document.getElementById("no").value;

var h2=document.getElementById("result");


let r;

for(let i=1;i<=10;i++){

r=no*i;

h2.innerHTML+=`${no}x${1}=${r} <br/>`;





}




}