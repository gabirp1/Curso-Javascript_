const saludo = "Hola mundo" // comentario que no se muestra por poner la doble barra

console.log(saludo) /* .................  todo lo que aparece aqui no se muestra */


const madera = 'haya'
const patas = 4
let altura = 120.5
const unidades = 'centímetros'
const esNueva = true
altura = 22.2
const color = 'blanco'
let x = 'text'
/*console.log(madera)
console.log(patas);
console.log(altura);
console.log(unidades);
console.log(esNueva);
console.log(x);
console.log('--------------------------------')
console.log(typeof madera);
console.log(typeof patas)
console.log(typeof altura);
console.log(typeof unidades);
console.log(typeof esNueva);


console.log(altura);*/
/*console.log(x)
console.log(typeof x);




{
    const madera = 'roble'
    console.log(madera);
} */


const calcularDiametro = function (perimetro) {      /*funciones varias*/
    if (typeof perimetro === 'number') {
        return perimetro / Math.PI
    }
}
const diametro = calcularDiametro(80)
console.log(diametro)

const suma = function (a, b) { return a + b }
const resultado = suma(2, 3)
console.log(resultado)

const resta = function (a, b) { return a - b }
const resultadoResta = resta(2, 3)
console.log(resultadoResta);

const multiplicacion = function (a, b) { return a * b }
const resultadoMulti = multiplicacion(2, 3)
console.log(resultadoMulti);

const division = function (a, b) { return a / b }
const resultadoDivi = division(2, 3)
console.log(resultadoDivi);


/*console.log('hola ' + ' mundo');*/

const concatenar = function (a, b) { return a + b }
const ResultadoConca = concatenar('hola ', ' mundo')
console.log(ResultadoConca)

const describirMueble = function (madera) {
    let resultado = `Esta mesa es de ${madera}`
    return resultado
}
console.log(describirMueble('haya'))


const DescribirMueble = function (madera, autor){
    let resultado = `Esta mesa es de ${madera} y el autor es ${autor}`
    return resultado
}
console.log(DescribirMueble('haya', 'Gabi'))

const DescribirMueble2 = function (madera, autor, año){
    let resultado = `Esta mesa es de ${madera} y el autor es ${autor} y se fabricó en ${año}. Por cierto, ${arguments[0]}`
    return resultado}
    console.log(DescribirMueble2 ('haya', 'Gabi', '1992'))
    console.log(DescribirMueble2('aveto', 'Gabi', '1992'))

    