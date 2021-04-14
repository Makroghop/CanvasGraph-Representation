/**
 * @type {HTMLCanvasElement}
 */
const cnv = document.getElementById("canvas");
const ctx = cnv.getContext("2d");
cnv.width = cnv.width;
cnv.height = cnv.height;
// _____drawing a line_____ :
// ctx.moveTo(x:number,y:number) - defines the staring point of the line.
// ctx.lineTo(x:number,y:number) - defines the ending point of the line.
//++ to actually see the line, you must use one of the ink methods :
for (let x = 10; x < cnv.width; x += 10) {
  ctx.moveTo(x, 0);
  ctx.lineTo(x, cnv.height);
}
for (let y = 10; y < cnv.height; y += 10) {
  ctx.moveTo(0, y);
  ctx.lineTo(cnv.width, y);
}
{
  ctx.strokeStyle = "#ddd";
  ctx.stroke();
}

ctx.beginPath();
ctx.moveTo(0, 40);
ctx.lineTo(240, 40);
ctx.moveTo(260, 40);
ctx.lineTo(500, 40);
ctx.moveTo(495, 35);
ctx.lineTo(500, 40);
ctx.lineTo(495, 45);

ctx.moveTo(60, 0);
ctx.lineTo(60, 153);
ctx.moveTo(60, 173);
ctx.lineTo(60, 375);
ctx.moveTo(65, 370);
ctx.lineTo(60, 375);
ctx.lineTo(55, 370);

// adding text
ctx.font = "bold 15px 'sans-serif'";
ctx.fillText("x", 248, 43);
ctx.fillText("y", 58, 165);

ctx.textBaseline = "top";
ctx.fillText("( 0 , 0 )", 8, 5);

ctx.textAlign = "right";
ctx.textBaseline = "bottom";
ctx.fillText("( 500 , 375 )", 495, 365);
{
  ctx.strokeStyle = "#000000";
  ctx.stroke();
}

// dots
ctx.fillRect(0, 0, 3, 3);
ctx.fillRect(497, 372, 3, 3);
