//Carrito 

function Carrito (productos, descuento) {
	this.productos = productos;
	this.descuento = descuento;

	} 

	var carrito = new Carrito(["tocadiscos","mp4"], 0.5);

	console.log(carrito)

	var carritoJSON = JSON.stringify(carrito)

	localStorage.setItem("carrito", carritoJSON)





productos = [
"lemonPie", //0
 "Crumbel", //1
 "tortaDeLimón", //2
 "pastaFrola", //3
 "brownie", //4
 "alfajorcito", //5
 "jugo", //6
 "tortaEnVasos", //7
 "ensalada"//8

 ]

console.log (productos)

// Recetario para el host.

function ingredientes (harina, 
	azúcar, //1
	manteca, //2
	limón, //3
	huevo, //4
	féculaDeMaíz, //5
	agua, //6
	jugoDeLimón, //7
	claraDeHuevo, //8
	manzanas, //9 
	) {

	this.harina = harina;
	this.azúcar = azúcar;
	this.manteca = manteca;
	this.limón = limón;
	this.huevo = huevo;
	this.féculaDeMaíz = féculaDeMaíz;
	this.agua = agua;
	this.jugoDeLimón = jugoDeLimón;
	this.claraDeHuevo = claraDeHuevo;
}

















