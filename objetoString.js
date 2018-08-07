
var b="garcia";

var a =new String("Danny burguer");
console.log(a);

//convierte en mayusculas
console.log(a.toUpperCase());

//convierte en minusculas
console.log(a.toLowerCase());

var i=a.indexOf("burguer");
console.log("la letra y esta en la aposicion: ",i);

var i=a.lastIndexOf("n");
console.log("la letra n esta en la aposicion: ",i);


var nombre=a.substring(0,a.indexOf(" "));
console.log(nombre);


var split=a.split(" ");
console.log(split);
console.log(split.length);

//-------------escribir en la pagina

document.write(a.italics());