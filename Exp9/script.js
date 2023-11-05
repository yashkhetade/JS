function addtoop(x){

    const op= document.getElementById('op');
    op.value += x;

}

function clearf(){
const v=document.getElementById('op');
v.value=" ";



}





function result(){
 const op= document.getElementById('op');

 const ip=op.value;


 try{
     const result=eval(ip);
    if(!isNaN(result)){
    op.value=result;
}

else{
alert("invalid input");    
clearf();
}

}
catch(error){
alert("invalid input");
clearf();

}



}