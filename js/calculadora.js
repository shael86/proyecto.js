
function calcularOperacion(primerNumero, operacion, segundoNumero) {

    switch (operacion) {

        case '+':

            return primerNumero + segundoNumero

        case '-':

            return primerNumero - segundoNumero

        case '*':

            return primerNumero * segundoNumero

        case '%':

            return primerNumero % segundoNumero

        default:

            return 0

    }

}



let numeroA = Number(prompt('Ingrese el primer número:'))

let operacion = prompt('Ingrese la operación:')

let numeroB = Number(prompt('Ingrese el segundo número:'))



let resultado = calcularOperacion(numeroA, operacion, numeroB)


alert( ' resultado: ' +resultado);