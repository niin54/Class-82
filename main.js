var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var prevx, prevy, mouseevent;
var color = "black";
var width = 2;

canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e) {
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent= "mouse_down";
}
canvas.addEventListener("mouseleave", mouseLeave);
function mouseLeave(e) {
    mouseevent="mouse_leave";
}
canvas.addEventListener("mouseup",mouseUp);
function mouseUp(e) {
    mouseevent="mouse_up";
}
canvas.addEventListener("mousemove",mouseMove);
function mouseMove(e) {
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    if (mouseevent="mouse_down") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("Previous x= "+prevx+" Previous y= "+prevy);
        ctx.moveTo (prevx,prevy);
        console.log("Current x= "+mousex+" Current y= "+mousey);
        ctx.lineTo (mousex,mousey);
        ctx.stroke()
    }
    prevx=mousex;
    prevy=mousey;
}
function clear() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}