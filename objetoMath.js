var PI=Math.PI;
var E=Math.E;

console.log(PI);
console.log(E);

var num1=10.456789;
console.log(num1);


//redondear un numero

//multiplicar por los numeros decimales
console.log(Math.round(num1*100)/100);


//quita todos los decimales sin redondeo
console.log(Math.floor(num1));

//numeros random entre 1 y 0
var rnd=Math.random();
console.log(rnd);



//random entre numeros
function randomEntre (min,max) {		
	return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomEntre(1,6));
/////////////////////////////////////////////////////////



//raiz cuadrada
console.log(Math.sqrt(10));

//exponentes (Numero-Exponente)

console.log(Math.pow(4,3));