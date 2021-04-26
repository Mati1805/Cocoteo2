var video = document.querySelector('#cocoteovideo')
var botonRep = document.querySelector('#reproducir')

function reproducir(){
	if(video.paused){
		video.play()
		botonRep.innerHTML='<span class="icon-pause2"></span>'
	}else{
		video.pause()
		botonRep.innerHTML='<span class="icon-play3"></span>'
	}
}

function inicio(){
	video.pause()
	video.currentTime=0
	botonRep.innerHTML='<span class="icon-play3"></span>'			
}

function mover(fotogramas){
	video.currentTime += fotogramas
}

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var can = function () {
var canvas;
var context; 
var x = 0;
var y = 0;

function currectX() {
   return x = x + 1;
}

function currectY() {
   return y = y + 1;
} 

return {
   draw: function () {
var r = Math.floor(Math.random() * 255) + 70;
var g = Math.floor(Math.random() * 255) + 70;
var b = Math.floor(Math.random() * 255) + 70;
var s = 'rgba(' + r + ',' + g + ',' + b + ', 0.5)';

context.fillStyle = s;
context.scale(1.2,1.2);
context.fillRect(currectX(), currectY(), 5, 5);
},
init: function () {
canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
context.translate(0, 0);
setInterval(can.draw, 1000);
}
}
} ();

window.onload = can.init;
