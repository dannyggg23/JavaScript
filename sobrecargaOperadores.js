function crearProducto(nombre,precio)
{
	nombre=nombre||"sin nombre";
	precio=precio||0;
	console.log("Productos: ",nombre," precio: ",precio);
}

function crearProducto100(nombre)
{
	crearProducto(nombre,100);
}

function crearProductoCamisa(precio)
{
	crearProducto("Camisa",precio);
}

crearProducto("Lapiz",0.25);
crearProducto100("Corrector");
crearProductoCamisa(26.50);