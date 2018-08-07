var nota=70;

if(nota>=90)
{
	console.log("A");
}
else if(nota>=80)
{
	console.log("B");
}
else if(nota>=70)
{
	console.log("C");
}
else if(nota>=60)
{
	console.log("D");
}
else
{
	console.log("F");
}


console.log("Termino el codigo");

/////////////////////////////////////////

var a=10;
var b=20;
//si a es mayor que b va a ser igual a (a) sino (b)
var c=(a>b)?a:b;
console.log(c);


////////////////////////////////////////

var d=(a>b)?function() {

	console.log("A es mayor que b");
	return a;
} () : function () {

	console.log("B es mayor que A");
	return b;
} ();

console.log(d);

///////////////////////////////////

var x=10;
var y=undefined;

//toma el valor que esta definido con un valor
var z=x || y;
console.log(z);


//////////////////////

function getNombre (nombre) {

	var nom=nombre||"sin nombre";

	console.log(nom);
}

getNombre();














