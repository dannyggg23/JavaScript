//var arr=new Array();
//posicionamiento en 0
var arr=[5,4,3,2,1];
console.log(arr[0]);
console.log(arr[4]);

//invierte el arreglo
arr.reverse();
console.log(arr);


///permite ejecutar una ejecucion con cada uno de los arreglos---como el for
arr=arr.map(function(elem){

elem*=elem;
return elem;

});
console.log(arr);

//ejecuta la raiz cuadrada de todos loe elementos del arreglo
arr=arr.map(Math.sqrt);
console.log(arr);

//convierte en un solo estrin separado por el elemnto dentro del parentesis
arr=arr.join("|");
console.log(arr);

//separador 
arr=arr.split("|");
console.log(arr);

//agregar un valor al arreglo en la ultima pocicion
arr.push("6");
console.log(arr);

//agregar un valor al arreglo en la primera pocicion
arr.unshift("0");
console.log(arr);

//es mas rapido
console.log(arr.toString());

//elimina el ultimo elemento del arreglo
var elimine=arr.pop();
console.log(arr,elimine);

//apunta a la posiscion (n) del arreglo y elimina (n) posisciones-----(opcional meter (n) elementos a la pocicion eliminada)
arr.splice(1,0,"10","20","30");
console.log(arr);


//cortar un elenteo de donde a donde
arr=arr.slice(0,3);
console.log(arr);




//arreglo de diferentes titpos
var arr2=[
true,
{
	nombre:"danny",
	apellido:"garcia"
},function(){
	console.log("Estoy viviendo en un arreglo");
},
function(persona){
	console.log(persona.nombre+" "+persona.apellido);
},
["dany",
"bueguer",
"gustavo",
"galarza",
[
"juan",
"pedro",
function()
{
	console.log(this);
}
]
]
];

console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1].nombre+" "+arr2[1].apellido);
arr2[2]();

arr2[3](arr2[1]);

console.log(arr2[4][4][1]);

var arr3=arr2[4][4];
arr3[1]="pedra";
console.log(arr3);
arr3[2]();
