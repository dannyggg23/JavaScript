
//document.cookie="Nombre=Danny";
//document.cookie="Apellido=García";


function crearCookie (nombre,valor) {
//escape cambia los valores que nos puede dar problemas
//unescape lo opuesto

	valor=escape(valor);


//la cookie va a vivir un mes
	var hoy=new Date();
	hoy.setMonth(hoy.getMonth()+1);


	document.cookie=nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}


function borrarCookie (nombre) {
	
	var hoy=new Date();
	hoy.setMonth(hoy.getMonth()-1);


	document.cookie=nombre+"=x;expires="+hoy.toUTCString()+";";
}


function getCookie (nombre) {

	var cookies=document.cookie;

	var cookieArr=cookies.split("; ");
	console.log(cookieArr);
	
	for (var i = 0; i<cookieArr.length; i++) {
		var parArr=cookieArr[i].split("=");
		cookieArr[i]=parArr;


		if(parArr[0]===nombre)
		{
			return unescape(parArr[1]);
		}

	}

		return undefined;
}

console.log(getCookie("Correo"));
//crearCookie("Nombre","Danny");
//crearCookie("Correo","Dannyggg23@gmail.com");
//crearCookie("Direccion","Latacunga");
//borrarCookie("Nombre");
























