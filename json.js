var objetoJS=
{
	nombre:"Danny",
	edad:25
};

console.log("objeto" , objetoJS);

var jsonString=JSON.stringify(objetoJS);
console.log(jsonString);

//convertir  un objeto el json

var objetoDesdeJson=JSON.parse(jsonString);
console.log(objetoDesdeJson);
console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);