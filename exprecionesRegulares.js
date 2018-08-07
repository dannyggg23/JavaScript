//var reg1= RegExp("a");
//var reg2=/a/;


var texto="Hola mundo";


// /^a/ buscar la palabra al inicio   /a$/ buscar l apalabra al final  /.../cualquier caracter

//  /^.a/ cualquier craacter el principio

//  /[0-9]/ rango de numeros

//  /[a-zA-Z]/ rango de letras

// /[aeiou]/ vocales
// /[aeiou]./ cualquier vocal seguida de cualquier caracter

//  /\s/ si hay espacio cualquier separacion

// /[a-zA-Z0-9]/   =    /\w/  cualquier palabra  

//  /\d/ = /[0-9]/

// i= insensible    --no importa mayusculas y minusculas (/[aeiou]/i)
// g=todas apariciones
// m=multilinea

// (/[aeiou]|[áéíóú]/ig) = (/[aeiouáéíóú]/ig) cualquier letra o cualquier letra tildada


// (/o+/g)  la primera o seguida de las siguientes o pegadas

// (/o?/g) imprime todos los epacios y los que contengas la pablara

// (/0{2,}g/) imprime un rando de 2  a todas las que vengan



var arr=texto.match(/a/);
console.log(arr);


//sacar diptongos
var text="Aeropuerto";
console.log(text);

var arr1=text.match(/[aeiou]{2,2}/ig);
console.log(arr1);














