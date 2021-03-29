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
