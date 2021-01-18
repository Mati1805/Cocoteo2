var nombre = prompt("Hola! ¿Cuál es su nombre?") 

var elementonombre = document.getElementById('post_logo_1')

elementonombre.innerHTML='<h2>Bienvenid@ '+nombre+'</h2>'

if(nombre==null){
	elementonombre.innerHTML='<h2>Bienvenid@</h2>'
}


