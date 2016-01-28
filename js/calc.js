$(document).ready(function() {
  canvas = document.getElementById("calc-head");
  ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 10.0;
  ctx.strokeStyle = '#000000';
  drawHeadCap();
  drawAntennas();
  drawAntennaTips();
  
  looks = true;;
  func_array = [lookUp, lookLeft, lookRight, lookDown];

  delayedGlances();

  
});

function stopGlances()
{
  clearInterval(intervalID);
}

function delayedGlances()
{
  intervalID = setInterval(glances, 8000);
}

function glances()
{
  ran_num = getRandomIntInclusive(0, 3);
  func_array[ran_num]();
}

function drawHeadCap()
{
  ctx.beginPath();
  ctx.moveTo(5, 100);
  ctx.lineTo(100, 5);
  ctx.lineTo(300, 5);
  ctx.lineTo(695, 400);
  ctx.stroke();
  ctx.fillStyle = '#f5a819';
  ctx.fill();
}

function drawAntennas()
{
  // draw left antenna
  ctx.beginPath();
  ctx.moveTo(25, 75);
  ctx.lineTo(10, 20);
  ctx.lineWidth = 5.0;
  ctx.lineTo(17, 17);
  ctx.lineTo(45, 55);
  ctx.fillStyle = '#bf7f00';
  ctx.fill();
  ctx.stroke();

  // draw right antenna
  ctx.beginPath();
  ctx.moveTo(canvas.width - 25, 75);
  ctx.lineTo(canvas.width - 10, 20);
  ctx.lineWidth = 5.0;
  ctx.lineTo(canvas.width - 17, 17);
  ctx.lineTo(canvas.width - 45, 55);
  ctx.fillStyle = '#bf7f00';
  ctx.fill();
  ctx.stroke();
}

function drawAntennaTips()
{
  // draw left antenna tip
  ctx.beginPath();
  ctx.arc(9.5, 9.5, 8, 0, 2*Math.PI, false);
  ctx.fillStyle = '#f5a819';
  ctx.fill();
  ctx.lineWidth = 3.0;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // draw right antenna tip
  ctx.beginPath();
  ctx.arc(canvas.width - 9.5, 9.5, 8, 0, 2*Math.PI, false);
  ctx.fillStyle = '#f5a819';
  ctx.fill();
  ctx.lineWidth = 3.0;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

function getRandomIntInclusive(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lookUp()
{

  // continually move pupils
  // top value not exceed 35 or -12 OR 19 or 3 in side
  // left value not exceed -12 or 35 OR 19 or 3 in top/bottom
  $(".pupil").animate({"top": "-=22px"}, 900);  
  $(".pupil").animate({"left": "-=7px"}, 900);  
  $(".pupil").animate({"left": "+=16px"}, 900);  
  $(".pupil").animate({"left": "-=9px"}, 900);  
  $(".pupil").animate({"top": "+=22px"}, 900);  
}

function lookLeft()
{
  $(".pupil").animate({"left": "-=12"}, 900);
  $(".pupil").animate({"top": "-=7"}, 200);
  $(".pupil").animate({"top": "+=22"}, 900);
  $(".pupil").animate({"top": "-=15"}, 300);
  $(".pupil").animate({"left": "+=12"}, 900);
}

function lookRight()
{
  $(".pupil").animate({"left": "+=12"}, 900);
  $(".pupil").animate({"top": "-=7"}, 300);
  $(".pupil").animate({"top": "+=22"}, 900);
  $(".pupil").animate({"top": "-=15"}, 400);
  $(".pupil").animate({"left": "-=12"}, 900);
}

function lookDown()
{
  $(".pupil").animate({"top": "+=22px"}, 900);  
  $(".pupil").animate({"left": "-=7px"}, 400);  
  $(".pupil").animate({"left": "+=16px"}, 900);  
  $(".pupil").animate({"left": "-=9px"}, 300);  
  $(".pupil").animate({"top": "-=22px"}, 900);  
}
