'use strict';

//Fase 1
//Vamos a hacer una función que escriba patata 10 veces en la consola la función se llamará ten()



//Primero se declara la función, el nombre que tiene y lo que hace.
// function ten() {
//     //con un bucle for (inicialización, condición y actualización)
//     for (let i = 0; i < 10; i++) {
//     console.log('patata');
//   }
// }
//Después se ejecuta, hay que guardarla en una constante nueva que recogerá el valor que se genera.

// const tenPotatoes = ten();


// Fase 2
// Ahora tenemos una función que nos escribe patata 10 veces en la consola cada vez que la llamemos, pero eso, dentro de lo que cabe, es poco útil porque ahora que sé que puedo escribir una palabra 10 veces en la consola lo que me gustaría es poder escribir palabras diferentes.
// ten('Patata`);
// ten('Aguacate`);
// ten('Pizza');
// Entonces, vamos a modificar nuestra función ten() para que acepte un parámetro word, y vamos a llamar a la función 3 veces, pasándole cada vez una palabra diferente:



// function ten(food) {
//     for (let i = 0; i < 10; i++) {
//     console.log(food);
//      }
//  }

// const tenPotatoes = ten('Aguacate');


// Fase 3
// Joé, si puedo pasar a mi función la palabra que quiero escribir, pues voy a querer más: ahora mismo si le paso una palabra me la escribe 10 veces, pero ¿y si quisiese que me la escribiese diferente número de veces cada vez?

// ¿Qué tendría que hacer para que al llamar a mi función de estas formas escribiese las palabras el numero de veces que le diga?

// ten('patata', 10);
// ten('aguacate', 7);
// ten('Pizza', 50);
// Una vez conseguido renombraremos la función ten a writeThis;


// function writeThis(food, x) {
//     for (let i = 0; i < x; i++) {
//     console.log(food);
//      }
//  }

// const tenPotatoes = writeThis('Pizza', 34);
// const tenPotatoes1 = writeThis('Aguacate', 23);



// Fase 4
// Ahora hemos visto que a una función le podemos pasar datos en crudo a través de los parámetros. Además podríamos pasar estos datos si ya los tuviésemos almacenados en constantes e ¡¡¡incluso funciones que nos devuelvan datos!!!

// ¡Qué locura! ¿Cómo es eso de la funciones? Vamos a rescatar a nuestra querida getRandomNumber() del ejercicio de evaluación intermedia, para quien no se acuerde era algo como:

// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }
// Esta función generaba un número aleatorio de 0 al número que le pasemos por parámetro.

// ¿Qué le tendríamos que escribir en nuestra función writeThis para que nos escribiese las palabras que le pasamos un número random de veces de 0 a 10?

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const random1 = getRandomNumber(50);
const random2 = getRandomNumber(50);
const random3 = getRandomNumber(50);


function writeThis(food, random) {
    for (let i = 0; i < random; i++) {
    console.log(food);
     }
 }

const randomFood1 = writeThis('Pizza', random1);
const randomFood2 = writeThis('Aguacate', random2);
const randomFood3 = writeThis('Potato', random3);
