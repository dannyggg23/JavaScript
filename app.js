

//ESCRIBIR ALERTAS EN LA CONSOLA DEL NAVEGADOR
//console.log(a);
//console.warn(a);
//console.error(a);
//console.info(a);












/*SINTAXIS DE FUNCIONES SIMPLES

function imprimir(){
	for(var i=0;i<8000;i++)
	{
		console.log("Imprimio");
	}
}
function precionoClick(){
	console.log("Click boton");
}
imprimir();*/











/*TIPOS DE VARIABLES Y OBJETOS

//tipos de variables
var num=10;
var str="texto";
var bol=true;
var und=undefined;
var nul=null;

//objetos
var obj={
	numero:10,
	texto:"danny",

	objHijo:{
	numero2:20,
	texto2:"danny 2"
	}
};
console.log(obj);
*/











/*POR VALOR Y POR REFERENCIA

//no se cambian
var a=10;
var b=a;
console.log("a",a);
console.log("b",b);
a=20;
console.log("a",a);
console.log("b",b);

//siempre se cambian por referencia
var c={nombre:"juena"};
var d=c;

console.log("c",c);
console.log("d",d);
c.nombre="maria";

console.log("c",c);
console.log("d",d);
d.nombre="pedro";
console.log("c",c);
console.log("d",d);
*/













//NOTACION DE PUNTO EN ONBJETOS
/*
var persona={
	nombre:"juana",
	apellido:"herrera",
	edad:25,
	direccion:{
		pais:"Ecuador",
		ciudad:"Latacunga",
		edificio:{
			nombre:"Edificio principal",
			telefono:"222-888"
		}
	}
};

console.log(persona.apellido);
console.log(persona.direccion.pais)
console.log(persona.direccion.ciudad)

persona.direccion.zipcode=050401;

console.log(persona.direccion.zipcode);
console.log(persona.direccion.edificio.telefono);

//resumir
var edificio=persona.direccion.edificio;
edificio.numpiso="8vo piso";

console.log(persona)
*/












//NOTACION DE CORCHETE
/*

var persona={
	nombre:"juana",
	apellido:"herrera",
	edad:25,
	direccion:{
		pais:"Ecuador",
		ciudad:"Latacunga",
		edificio:{
			nombre:"Edificio principal",
			telefono:"222-888"
		}
	}
};
var campo="edad2";
console.log(persona["nombre"]);
console.log(persona["direccion"]["pais"]);
console.log(persona[campo]);
*/











//FUNCIONES

/*FUNCIONES CON VARIABLES
function primeraFuncion(){
var a=20;
console.log(a);
}

//primeraFuncion();

function imprimir(nombre,apellido){

//verificar si la variable esta vacia 1
//if(apellido===undefined){
//	apellido="xxx";
//}
//verificar si la variable esta vacia 2

apellido=apellido || "xxx";

console.log(nombre+" "+apellido);
}
var ape="garcia";

imprimir("danny",ape);
*/











/*FUNCIONES CON OBJETOS
function imprimir(persona)
{
console.log(persona.nombre+" "+persona.apellido);
}
var obj={nombre:"danny",
	apellido:"garcia"};

imprimir(obj);*/













/*LLAMAR A UNA FUNCION CON UNA FUNCION
function imprimir(fn,f1)
{
fn();
f1();
}


var miFuncion=function(){
	console.log("miFuncion")
}


imprimir(function()
{
	console.log("funcion anonima")
},
miFuncion);
*/










/*RETORNO DE LAS FUNCIONES
function onbtenerAleatorio()
{
return Math.random();
}

function obtenerNombre()
{
	return "Danny";
}

var nombre=obtenerNombre();
console.log(nombre+" Garcia");


function esMayor05()
{
	if(onbtenerAleatorio() > 0.5)
	{
		return true;
	}
	else
	{
		return false;
	}
}
console.log(esMayor05());

if(esMayor05()){
	console.log("es mayor a 0.5");
}
else
{
	console.log("es menor a 0.5");
}

function crearPersona(nombre,apellido)
{

	return{
		nombre:nombre,
		apellido:apellido
	}
}

var persona=crearPersona("maria","paz");
console.log(persona.nombre);
console.log(persona.apellido);*/









/*FUNCIONES QUE REGRESAN FUNCIONES
function crearFuncion(){

	return function(nombre)
	{
	console.log("me crearon!!! "+nombre);
	return function(){
		console.log("segunfa funcion");
	}
	}
}

var nuevafuncion=crearFuncion();
var segundaFuncion =nuevafuncion("danny");
segundaFuncion();*/









/*FUNCIONES DE PRIMERA CLASE
function a(){
	console.log("funcion a");
}
a();
a.nombre="danny"; //name,apply,etc cambia las funciones principales
a.direccion={
	pais:"Ecuador",
	ciudad:"Latacunga",
	edificio:{
		piso:"segundo",
		nombre:"edificio 3"
	}
};*/








/*METODOS Y EL OBJETO THIS

//this propio de cada funcion de cada objeto
var persona={
nombre:"danny",
apellido:"garcia",
imprimirNombre:function()
{

console.log(this.nombre+" "+this.apellido);

},
direccion:{
	pais:"Ecuador",
	obtenerPais:function()
	{
		//console.log("la direccion es en "+this.pais);

		var self=this;	//self es muy utilizado para reemplazar al this para otra funcion

		var nuevadireccion=function()
		{
			console.log(self);
			console.log("la direccion es en "+self.pais);
		}
		nuevadireccion();
	}
}
};

persona.nombre="gustavo";

persona.imprimirNombre();
persona.direccion.obtenerPais();*/











/*PALABRA RESERVADA NEW

function Persona(nombre,apellido){
this.nombre=nombre;
this.apellido=apellido;
this.edad=25;

this.imprimirPersona=function()
{
	return this.nombre+" "+this.apellido+" "+this.edad;
}
}

var aaa= new Persona("Danny","Garcia");//hace referencia a la funcion
console.log(aaa);
console.log(aaa.nombre);
console.log(aaa.imprimirPersona());
*/

