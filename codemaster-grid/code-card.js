var x = 0;
var grid = document.getElementById("card-grid");
var cards = '<div class="row"><div class="col s1"></div>';
var redCount = 9;
var blueCount = 9;
var brownCount = 7;
var blackCount = 1;
var reds = 0;
var blues = 0;
var blacks = 0;
var browns = 0;
var chosen = false;
var color = '';
const timer = new Tock({
      countdown: true,
      interval: 10,
      callback: () => {
        var current_time = timer.msToTime(timer.lap());
        document.getElementById('clock').value = current_time;
      },
      complete: () => {
        play();
      }
    });
document.getElementById('start').addEventListener('click', () => {
  document.getElementById('clock').value = '01:30';
  timer.start(document.getElementById('clock').value);
  });
document.getElementById('stop').addEventListener('click', () => {
  timer.stop();
  document.getElementById('clock').value = '01:30';
  });
function play() {
	var audio = new Audio(
    'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
	audio.play();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
while (x < 25){
  x++;
  while (!chosen){
  	var random = getRandomInt(4);
    if (random == 0 && reds < redCount){
    	color = 'red';
      reds++;
      chosen = true;
    }
    if (random == 1 && blues < blueCount){
    	color = 'blue';
      blues++;
      chosen = true;
    }
    if (random == 2 && browns < brownCount){
    	color = 'brown';
      browns++;
      chosen = true;
    }
    if (random == 3 && blacks < blackCount){
    	color = 'black';
      blacks++;
      chosen = true;
    }
  }
	cards += `<div class="col s2"><div class="card"><div class="card-content ${color} white-text"></div></div></div>`;
	if (x % 5 === 0){
  	cards += `</div><div class="row"><div class="col s1"></div>`;
  }
  chosen = false;
  if (reds == 9 && blueCount == 9){
  	blueCount -= 1;
  }
  if (blues == 9 && redCount == 9){
  	redCount -= 1;
  }
}
if(blueCount == 9){
	color = "blue";
}
else{
	color = "red";
}
cards += `<div class="col s12"><div class="card blue-grey darken-1 center">
  <span class="card-title white-text">The first Code Master is: <a class="${color}">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></span></div></div>`;
grid.innerHTML = cards;
