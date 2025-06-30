let currentCollor = "black";
let screen = document.querySelector("#tela");
let canDraw = false;
let ctx = screen.getContext("2d");

screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mouseup", mouseUpEvent);

document.querySelectorAll(".colorArea .color").forEach((i) => {
  i.addEventListener("click", colorClickEvent);
});
document.querySelector(".clear").addEventListener("click", clear);

function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color");
  currentCollor = color;

  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}

function mouseDownEvent(e) {
  canDraw = true;

  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}
function mouseMoveEvent(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}
function mouseUpEvent() {
  canDraw = false;
}

function clear() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  //desenhar

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentCollor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}
