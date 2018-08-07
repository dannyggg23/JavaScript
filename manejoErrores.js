

try {
	var a=100;
throw 'oh oh';

	console.log("el valor de a es: ",a);

} catch(e) {
	
	console.log(e);
} finally {
	console.log("Finalmente");
}