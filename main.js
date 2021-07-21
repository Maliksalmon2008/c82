var mouseevent="empty";
var lastpositionX="";
var lastpositionY="";
var color="purple";
var width="10";
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
mouseevent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="MouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
mouseevent="mousemove";

var currentpositionofX=e.clientX - canvas.offsetLeft;
var currentpositionofY=e.clientY - canvas.offsetTop;
if(mouseevent=="mouseDown"){
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=width;
 ctx.moveTo(lastpositionX,lastpositionY);
 lastpositionX=currentpositionofX;
 lastpositionY=currentpositionofY;
 console.log("last position of X and Y cooradnites")
 console.log("X="+lastpositionX+"Y"+lastpositionY);
 ctx.lineTo(currentpositionofX,currentpositionofY)
 ctx.stroke();
 console.log("Current position of X and Y cooradnites")
 console.log("X="+currentpositionX+"Y"+currentpositionY);


}

}
