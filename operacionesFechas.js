var fecha=new Date();
console.log(fecha);

//sumar 5 dias

fecha.setDate(5);
console.log(fecha);

Date.prototype.sumarDias = function(dias){
	this.setDate(this.getDate()+dias);
	return this;
};

Date.prototype.sumarAnios = function(anios){
	this.setFullYear(this.getFullYear()+anios);
	return this;
};

console.log(fecha);
console.log(fecha.sumarDias(-30));
console.log(fecha.sumarAnios(10));


