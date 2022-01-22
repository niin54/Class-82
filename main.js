var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var prevx, prevy, mouseevent;
var color = "black";
var width = 2;

canvas.addEventListener("mousedown", my_mouseDown);
function my_mouseDown(e) {
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent= "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e) {
    mouseevent="mouseLeave";
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e) {
    mouseevent="mouseUP";
}
canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e) {
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    if (mouseevent="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("Previous x= "+prevx+" Previous y= "+prevy);
        ctx.moveTo (prevx,prevy);
        console.log("Current x= "+mousex+" Current y= "+mousey);
        ctx.lineTo (mousex,mousey);
        ctx.stroke();
    }
    prevx=mousex;
    prevy=mousey;
}
function clear() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}