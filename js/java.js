//eventos
$( document ).ready(function() 
{
   alert( "Bienvenides a Cremlulé" );
});


var deliciasSinGluten = function (){
	alert("¡Delicias sin Gluten!")
}

var button = document.getElementById("button");
button.addEventListener("click", deliciasSinGluten);


// DOM

var personita = document.getElementsByTagName("h1")

console.log(personita)


// Este es el constructor para la persona

function Persona(nombre, dni){
    this.nombre = nombre;
    this.dni = dni;
}


// Cada vez que una persona entrra a mi pagina,
// guardo su nombre

    nombreGuardado = prompt("Ingrese su nombre")
    sessionStorage.setItem("nombre", nombreGuardado)
// }

// En caso de que esa persona ya tuviese un carrito, se lo muestra

if (sessionStorage.carrito){
    alert("Terminá tu compra! Este es tu carrito:")
    alert(JSON.parse(sessionStorage.carrito))
} else {

    // Sino, guarda un carrito con productos cualesquiera (?)

    function Carrito(productos, descuento){
        this.productos = productos;
        this.descuento = descuento;
    }

    var carrito = new Carrito(["discman", "mp3", "ipod", "tocadiscos"], 0.5)

    console.log(carrito);

    var carritoJSON = JSON.stringify(carrito)

    sessionStorage.setItem("carrito_" + nombreGuardado, carritoJSON)
}





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

//Eventos: se escriben con el prefijo "on" y luego la acción asociada. Ej: "onclick

//Lista de eventos:

//Click = un click
//Change = cada vez que hay un cambio

