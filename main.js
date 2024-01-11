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



function ten(food) {
    for (let i = 0; i < 10; i++) {
    console.log(food);
     }
 }

const tenPotatoes = ten('Aguacate');