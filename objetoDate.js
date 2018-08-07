var hoy =new Date();

var fechaMilisegundos=new Date(0);

var fechaFija=new  Date(2016,9, 21, 23, 12, 12, 13);


console.log(hoy);
console.log(fechaMilisegundos);
console.log(fechaFija);

console.log(hoy.getFullYear());
console.log(hoy.getDate());
console.log(hoy.getHours());
console.log(hoy.getHours());
console.log(hoy.getMonth());
console.log(hoy.getSeconds());
console.log(hoy.getTime());//fecha en milisegundos


/////////////////////

var inicio =new Date();
for(var i=0;i<15000;i++)
{
	console.log("algo")
}
var fin=new Date();

//console.log(inicio);
//console.log(fin);

var duracion=fin.getTime()-inicio.getTime();

console.log(duracion," milisegundos");
console.log((duracion/1000)," segundos");


////https://momentjs.com/
