var carta1 = prompt("¿Qué carta desea ver? Desayuno , Merienda , Cena , Ambas y/o Bebidas - Cancelar para poder seleccionar todas")
carta1 = carta1.toLowerCase()
if (carta1 == 'desayuno') {
	document.getElementById("lista1").style.marginTop = "130px";
	document.getElementById("lista2").style.display = "none";
	document.getElementById("lista3").style.display = "none";
	document.getElementById("lista4").style.display = "none";
}

if (carta1 == 'merienda') {
	document.getElementById("lista1").style.marginTop = "130px";
	document.getElementById("lista2").style.display = "none";
	document.getElementById("lista3").style.display = "none";
	document.getElementById("lista4").style.display = "none";
}

if (carta1 == 'cena') {
	document.getElementById("lista2").style.marginTop = "130px";
	document.getElementById("lista1").style.display = "none";
	document.getElementById("lista3").style.display = "none";
	document.getElementById("lista4").style.display = "none";
}

if (carta1 == 'ambas') {
	document.getElementById("lista3").style.marginTop = "130px";
	document.getElementById("lista1").style.display = "none";
	document.getElementById("lista4").style.display = "none";
	document.getElementById("lista2").style.display = "none";
}

if (carta1 == 'bebidas') {
	document.getElementById("lista4").style.marginTop = "130px";
	document.getElementById("lista2").style.display = "none";
	document.getElementById("lista3").style.display = "none";
	document.getElementById("lista1").style.display = "none";
}

if (carta1 == 'desayuno/merienda') {
	document.getElementById("lista1").style.marginTop = "130px";
	document.getElementById("lista2").style.display = "none";
	document.getElementById("lista3").style.display = "none";
	document.getElementById("lista4").style.display = "none";
}

if (carta1 == 'cena y bebidas') {
	document.getElementById("lista2").style.marginTop = "90px";
	document.getElementById("lista1").style.display = "none";
	document.getElementById("lista3").style.display = "none";
}

if (carta1 == 'bebidas y cena')	 {
	document.getElementById("lista2").style.marginTop = "90px";
	document.getElementById("lista1").style.display = "none";
	document.getElementById("lista3").style.display = "none";
}