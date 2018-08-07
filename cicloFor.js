
for (var i = 0; i <=10; i++)
{

	if(i==5)
	{
		continue;
	}

	console.log(i);


}


//////////////////////////////7

var Persona=function () {
	this.nombre="Danny";
	this.apellido="Garcia";
	this.edad=25;
};

var danny=new Persona();

Persona.prototype.direccion = "Latacunga";

for(prop in danny)
{
	console.log(danny.hasOwnProperty(prop));

	console.log(prop+":",danny[prop]);
}

[1,2,3,true,4,5,6,7,"danny",8,9,10].forEach( function(index) {
console.log(index);
});