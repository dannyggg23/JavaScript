
function miFuncion(a,b,c,d)
{
	//console.log(arguments);
if(arguments.length !== 4)
{
	console.log("la funcion necesita  parametros");
	return;
}

	console.log(a+b+c);
}
miFuncion(10,20,30,40);