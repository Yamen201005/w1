
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
button1.onclick=function() {
    var p1=document.getElementById("p1");
    p1.style.color="BLACK";
    button1.addEventListener("click",()=>{button1.style.backgroundColor="white";})
    button1.addEventListener("click",()=>{button1.style.color="black" ;})
button1.onmouseover=function() {
    button1.style.backgroundColor="orange";
}
button2.onclick=function() {
    var p1=document.getElementById("p1");
    p1.style.color="red";
    button2.addEventListener("click",()=>{button2.style.backgroundColor="white" ;})
 button2.addEventListener("click",()=>{button2.style.color="black" ;})

}
