document.onmousedown=function (arg) {
		
	if(arg.button ===2)
	{
	alert("Click bloqueado");
	return;
	}	


	console.log("No hay problema");
}


document.onmouseup=function () {
	var texto=window.getSelection().toString();

	console.log(texto);

}