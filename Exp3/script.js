function clicked(){
const s=document.getElementById("str").value  ;

var r=document.getElementById("h1");

const len=s.length;


for(let i=len-1;i>=0;i--){
r.innerHTML+=`${s[i]} `;
}


}


