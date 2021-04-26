var item = document.querySelector('#lista')

function guardar(){
	sessionStorage.setItem('nota', item.innerHTML)
	alert('Se guardó correctamente')
}

function mostrar(){
	if (sessionStorage.getItem('nota')) {
		item.innerHTML = sessionStorage.getItem('nota')
	}
}

function borrar(){
	sessionStorage.clear()
	location.reload()
	alert('Las notas fueron borrados')
}
	
function mostrarform(){
	var contacto = document.getElementById('formulario')
	var footer = document.getElementById('pie')
	if(contacto.style.display == 'none'){
		contacto.style.display = 'block'
		footer.style.display = 'none'
	}else{
		contacto.style.display = 'none'
		footer.style.display = 'block'
	}
}

function ubicacion(){
	var contacto = document.getElementById('formulario')
	var footer = document.getElementById('pie')
	if (contacto.style.display == 'block') {
		contacto.style.display = 'none'
		footer.style.display = 'block'
	}
}

