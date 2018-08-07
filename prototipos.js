
function Persona()
{
	this.nombre="Danny";
	this.apellido="Garcia";
	this.edad=25;
	this.pais="Ecuador";

	
}

Persona.prototype.imprimirInfo=function(){
	console.log(this.nombre+" "+this.apellido+" ("+this.edad+")");
}


var danny=new Persona();
//console.log(danny);
//console.log(danny.imprimirInfo());

Number.prototype.esPositivo=function(){
	if(this>0){
		return true;
	}
	else
	{
		return false;
	}
}

