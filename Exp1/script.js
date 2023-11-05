var r1=document.getElementById("result1");
var r2=document.getElementById("result2");
var r3=document.getElementById("result3");




function clicked1(){
    var lenght=document.getElementById("length").value ;

      var breadth=document.getElementById("breadth").value ;

      const area=lenght*breadth;

      r1.innerHTML=area;

console.log("clicked1");


}
function clicked2(){
    var base=document.getElementById("base").value ;

      var height=document.getElementById("height").value ;

      const area=(1/2)*base*height;

      r2.innerHTML=area;

console.log("clicked2");


}


function clicked3(){
    var  r=document.getElementById("radius").value ;

      const area=3.14*r*r;

      r3.innerHTML=area;

console.log("clicked3");


}