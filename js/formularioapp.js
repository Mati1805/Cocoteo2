function grabar(){
	var boton = document.querySelector('#grabar')
	boton.addEventListener('click', nuevaClase)
	mostrarClase()
}

function nuevaClase(){
	var clave = document.querySelector('#clave').value
	var eventos = document.querySelector('#eventos').value
	var recordatorios = document.querySelector('#recordatorios').value
	var fecha = document.querySelector('#fecha').value

	var valores = [clave, recordatorios, fecha]

	localStorage.setItem(eventos, valores)
	mostrarClase()
}

function mostrarClase(){
	var caja = document.querySelector('#mostrarDatos')
	for (var i = 0; i<localStorage.length; i++) {
		var id = localStorage.key(i)
		var valor = localStorage.getItem(id)

		caja.innerHTML += '<p>'+id+' - '+valor+'</p>' 
	}
}

function borrar(){
	localStorage.clear()
	location.reload()
	alert('Datos eliminados')
}

window.addEventListener('load', grabar)