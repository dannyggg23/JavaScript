


function evento (arg) {
	console.log("me dispare");
	console.log(arg);
	console.log(arg.x,arg.y);
}

var objeto=document.getElementById("objDemo");
console.log(objeto);
objeto.addEventListener("keypress",evento)


var boton=document.getElementById("objBoton");
boton.addEventListener("click", evento);






















