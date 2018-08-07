function determinaDato(a){
if(a === undefined)
{
	console.log("a es undefined... no se que hacer");

}

if(typeof a === "number")
{
	console.log("a es un numero y puedo hacer operaciones");

}

if(typeof a === "string")
{
	console.log("a es un texto");
}


if(typeof a === "object")
{
	console.log("a es un objeto");

	if(a instanceof Number )
	{
		console.log("a es un objeto numerico")
	}
}

}

var b=new Number(3);//se define como objeto no como numero

determinaDato(b);