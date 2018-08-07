

function crearFunciones() {
	var arr=[];
	var numero=1;



//imprimo el numero que esta en su contexto

	for(var numero=1;numero<=4;numero++)
	{
		arr.push(
		(function(numero)
		{
			return function(){
				console.log(numero);
			}
		})(numero)
		);
	}
return arr;

}

var funciones=crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();