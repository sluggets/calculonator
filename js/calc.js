$(document).ready(function() {

  // setup canvas and line styles
  canvas = document.getElementById("calc-head");
  ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 10.0;
  ctx.strokeStyle = '#000000';
  
  // draw parts of Calculon's head that css doesn't handle
  drawHeadCap();
  drawAntennas();
  drawAntennaTips();
  

  // draw mouth of teeth
  drawTeeth();

  looks = true;;
  // array of eye animations
  func_array = [lookUp, lookLeft, lookRight, lookDown];

  // uses setInterval to run continous eye movement
  delayedGlances();

  strVal = "";
  globVal = null;
  totalVal = null;
  globOp = "";
  /*$("button").click(function() {
    var ind = $("#eye-slot").css("background-color");
    console.log(ind);
    if (ind == "rgb(0, 0, 0)")
    {
      deleteEyes();       
    }
  });*/

  
});

function stopGlances()
{
  clearInterval(intervalID);
}

function delayedGlances()
{
  intervalID = setInterval(glances, 2000);
}

function glances()
{
  ran_num = getRandomIntInclusive(0, 3);
  func_array[ran_num]();
}

function drawTeeth()
{
  cvs = document.getElementById("teeth");
  ctxTeeth = cvs.getContext('2d');
  ctxTeeth.lineJoin = 'round';
  ctxTeeth.lineCap = 'round';
  ctxTeeth.lineWidth = 5.0;
  ctxTeeth.strokeStyle = '#000';  
  ctxTeeth.moveTo(25, 3);
  ctxTeeth.lineTo(25, 288);
  ctxTeeth.moveTo(97.5, 292);
  ctxTeeth.lineTo(97.5, 0)
  ctxTeeth.moveTo(170, 0);
  ctxTeeth.lineTo(170, 292);
  ctxTeeth.moveTo(242.5, 292);
  ctxTeeth.lineTo(242.5, 0);
  ctxTeeth.moveTo(315, 0);
  ctxTeeth.lineTo(315, 288);
  ctxTeeth.stroke();

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

// for directional animations:
// top value not exceed 35 or -12 OR 19 or 3 in side
// left value not exceed -12 or 35 OR 19 or 3 in top/bottom
function lookUp()
{
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


function restoreEyes()
{
  $("#eye-slot").empty();
  leftEye = document.createElement("div");
  rightEye = document.createElement("div"); 
  pupil = document.createElement("div");

  leftEye.setAttribute("id", "left-eye");
  leftEye.setAttribute("class", "eyes");

  rightEye.setAttribute("id", "right-eye");
  rightEye.setAttribute("class", "eyes");

  pupil.setAttribute("class", "pupil");


  $("#eye-slot").append(leftEye);
  $("#eye-slot").append(rightEye);
  
  $(".eyes").append(pupil);
  $("#eye-slot").css({"background-color": "#000", "box-shadow": "none", "border-style": "none"});
  var ind = document.getElementById("eye-slot");
  ind.setAttribute("mode", "eyes");
}

function deleteEyes()
{
  $("#eye-slot").empty();
  $("#eye-slot").css({"background-color": "#a8f682", "box-shadow": "inset 3px 3px 10px 1px grey", "border-style": "solid", "border-width": "5px"});
  /*dataView = document.createElement("div");
  dataView.setAttribute("id", "data-view");
  $("#eye-slot").append(dataView);*/
  numField = document.createElement("div");
  numField.setAttribute("id", "num-field");
  $("#eye-slot").append(numField);
  readout = document.createElement("p");
  readout.setAttribute("id", "readout");
  $("#num-field").append(readout);
  var ind = document.getElementById("eye-slot");
  ind.setAttribute("mode", "readout");
}
// maybe make this display and tabulate globVal?
function displayAndComputeValue(val)
{
  var ind = document.getElementById("eye-slot");
  var att = ind.getAttribute("mode"); 
  if (att  == "eyes")
  {
    deleteEyes();       
  }

  if (totalVal)
  {
    clearValue();
    totalVal = null;
  }

  $("#readout").append(val);
  strVal += val;
}

function clearValue()
{
  /*console.log("globVal: " + globVal, "globOp: " + globOp, "strVal: " + strVal, "totalVal: " + totalVal);*/
  if (globVal !== null)
  {
    globVal = null;
    strVal = "";
    globOp = "";
    deleteEyes();
  }
  else
  {
    deleteEyes();
  }
}

function clearComplete()
{
    totalVal = null;
    globVal = null;
    strVal = "";
    globOp = "";
    deleteEyes();
}

function getResult(computeType)
{
  console.log('inside getResult');
  if ((globOp) && globOp !== computeType)
  {
    if (strVal.indexOf('.') < 0)
    {
      var tempVal;
      if (checkZeroValue(strVal))
      {
        tempVal = '0'; 
      }
      else
      {
        tempVal = parseInt(strVal);
      }
      computeVal(globOp, tempVal);
      strVal = "";
    }
    else
    {
      var tempVal;
      if (checkZeroValue(strVal))
      {
        tempVal = '0'; 
      }
      else
      {
        tempVal = parseFloat(strVal);
      }
      computeVal(globOp, tempVal);
      strVal = "";
    }
  }
  globOp = computeType;
  if (globVal == null)
  {
    if(totalVal || totalVal == 0)
    {
      globVal = totalVal;
      computeVal(computeType, null); 
      strVal = "";
      totalVal = null;
    }
    else if (strVal.indexOf('.') < 0)
    {
      globVal = parseInt(strVal);
      computeVal(computeType, null); 
      strVal = "";
    }
    else
    {
      globVal = parseFloat(strVal); 
      computeVal(computeType, null); 
      strVal = "";
    }
  }
  else
  {
    if (strVal.indexOf('.') < 0)
    {
      var tempVal;
      if (checkZeroValue(strVal))
      {
        tempVal = '0'; 
      }
      else
      {
        tempVal = parseInt(strVal);
      }
      computeVal(computeType, tempVal);
      strVal = "";
    }
    else
    {
      var tempVal;
      if (checkZeroValue(strVal))
      {
        tempVal = '0'; 
      }
      else
      {
        tempVal = parseFloat(strVal);
      }
      computeVal(computeType, tempVal);
      strVal = "";
    }
  }
}

function computeVal(computeType, tempVal)
{
  switch (computeType)
  {
    case "divide":
      if (tempVal)
      {
        if (tempVal == '0')
        {
          tempVal = 0;
        }
        globVal /= tempVal;
      }
      else
      {
        $("#readout").append('/');
      }
      break;
    case "multiply":
      if (tempVal)
      {
        if (tempVal == '0')
        {
          tempVal = 0;
        }
        console.log("inside multiply");
        console.log("globVal: " + globVal);
        console.log("tempVal: " + tempVal);
        globVal *= tempVal;
      }
      else
      {
        $("#readout").append('X');
      }
      break;
    case "mod":
      if (tempVal)
      {
        if (tempVal == '0')
        {
          tempVal = 0;
        }
        globVal %= tempVal;
      }
      else
      {
        $("#readout").append('%');
      }
      break;
    case "subtract":
      console.log("tempVal: " + tempVal);
      console.log("globVal: " + globVal);
      console.log("inside subtract");
      if (tempVal)
      {
        if (tempVal == '0')
        {
          tempVal = 0;
        }
        console.log("peforming subtraction");
        globVal -= tempVal;
      }
      else
      {
        console.log("appending minus sign");
        $("#readout").append('-');
      }
      break;
    case "add":
      if (tempVal)
      {
        if (tempVal == '0')
        {
          tempVal = 0;
        }
        globVal += tempVal;
      }
      else
      {
        $("#readout").append('+');
      }
      break;
  }

}

function handleNegative()
{
  console.log('in handleNegative: ' + strVal);
  if (strVal.length == 0 && (!totalVal))
  {
    displayAndComputeValue('-');
    //$("#readout").append('-');
  }
  else
  {
    getResult("subtract");
  }
}

function equalTally()
{
  getResult(globOp);
  totalVal = globVal;
  clearValue();
  if (totalVal % 1 !== 0)
  {
    var printVal = totalVal.toFixed(2);
  }
  else
  {
    var printVal = totalVal;
  }
  $("#readout").append(printVal);
}

// I find myself checking for null, and the number 0 while
// necessary for calculations, returns null/false/whatever!
// so this substitutes with the string of zero so checks for zero
// don't show null. Also handles negative zero entries
// and zero floats
function checkZeroValue(val)
{
  if (val == '0' || val == '0.0' || val == '-0' || val == '-0.0')
  {
    return true;
  }

  return false;
}

function playRandom()
{
  var clips = ["js/eating-donkeys.mp3", "js/no-scream.mp3", "js/print-it.mp3", "js/remote-control.mp3", "js/self-explanatory.mp3", "js/sway-emotions.mp3", "js/two-takes.mp3", "js/unholy-acting.mp3"];
  var ran_num = getRandomIntInclusive(0, clips.length - 1);
  var current_clip = clips[ran_num];
  var audio = new Audio(current_clip);
  audio.play();
}

function getRandomIntInclusive(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
