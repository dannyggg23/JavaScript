/*


*/

var arr=["danny",
{
	nombre:"danny",
	apellido:"Garcia",
	getNombre:function () {
		return this.nombre+" "+this.apellido;
	}
},
	true,
	function (argument) {
		console.log(this);
	}

];

console.log(arr);
