var mouseEvent="empty";
var lastpositionX;
var lastpositionY;
var color="purple";
var width="10";
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
mouseEvent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

 currentpositionofX=e.clientX - canvas.offsetLeft;
 currentpositionofY=e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown"){
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=width;
 ctx.moveTo(lastpositionX,lastpositionY);

 console.log("last position of X and Y cooradnites")
 console.log("X="+lastpositionX+"Y"+lastpositionY);
 ctx.lineTo(currentpositionofX,currentpositionofY);
 ctx.stroke();
 console.log("Current position of X and Y cooradnites")
 console.log("X="+currentpositionX+"Y"+currentpositionY);
}
lastpositionX=currentpositionofX;
 lastpositionY=currentpositionofY;

}
function clear_area(){
    ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
}
 


