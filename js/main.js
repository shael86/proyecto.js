
// let numero = prompt (' ingrese un numero: ');

// numero = parseInt(numero);

// if (numero>1000){
//     alert('El numero es mayor a 1000')
// }


// let text = prompt ('Escriba "hola"')

// if (text =='hola'){

//     console.log ('Usted ha escrito "hola"')

// }

// numero = parseInt(numero);

// if (numero>1000){
//     alert('El numero es mayor a 1000')
// }


// let text = prompt ('Escriba "hola"')

// if (text =='hola'){

//     console.log ('Usted ha escrito "hola"')

// }let  numeroIngresado = parseInt(prompt('ingrese un nuemro'))

// for (let i=1 ; i <= 10 ; i++){
//     let resultado = numeroIngresado * i
//     console.log(resultado)
// }

let producto = '';
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = true;

do {
    producto = prompt('¿Quieres comprar cerveza APA,IPA O AMBAR?');
    let cantidad = parseInt(prompt( '¿cuantas deseas comprar?'));
    while (isNaN(cantidad)|| cantidad <= 0){
    alert( 'Debes agregar una cantidad valida.');
    cantidad = parseInt(prompt('¿Cuantas quieres comprar?'));
}

let precio = 0;

switch (producto) {
    case 'IPA':
        precio = 900
        break;
    case 'APA':
        precio = 1000
        break;
    case 'AMBAR':
        precio = 800
        break
    default:
        alert('El producto ingresado no es valido');
        continue;
}

let precioTotalProducto =  precio * cantidad;
precioTotal += precioTotalProducto;
cantidadTotal += cantidad;

alert('Has agredaddo ' +cantidad+ +producto+ ' al carrito. Total a pagar: $' +precioTotalProducto);
seguirComprando = confirm('¿Queres agregar otro producto?');

if (!seguirComprando){
    let finalizarCompra = confirm('¿Desea finalizar la compra?');

    if(finalizarCompra){
    alert ('Has comprado un total de ' +cantidadTotal+ ' productos ' + ' por un total de $ ' +precioTotal+'.' + ' ¡Gracias por su compra! ');
    }else{
        alert('Esperamos volver a verte pronto. ¡Hasta luego!');
    }
    }
}while (seguirComprando);