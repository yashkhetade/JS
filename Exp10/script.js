function clicked(){
const text=document.getElementById("replace");
text.innerText="Text has been replaced";
}

function getdetails(){
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const p4=document.getElementById("p4");

const appname=navigator.appName;
const appversion =navigator.appVersion;

p1.innerHTML=`appname : ${appname} , appversion : ${appversion} `


const height=window.screen.height;
const width=window.screen.height;

p2.innerHTML=`height : ${height} , appversion : ${width} `

const history=window.history.length;

p3.innerHTML=`history length : ${history} `

const para=document.getElementsByTagName('p').length;

p4.innerHTML=`paragraph length : ${para} `








}