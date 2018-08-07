function identifica(param)
{

	console.log(typeof param);
	//if(typeof param=="function")
	//{
	//	param();
	//}else{
	//	console.log(param);
	//}

	console.log(param instanceof Persona);//Validosi parametro es de tipo persona devuelve true/false
}

function Persona(){
	this.nombre="Danny";
	this.edad=30;

}

var danny=new Persona();

identifica(danny);