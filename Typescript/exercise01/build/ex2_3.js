"use strict";
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
function flatten(array) {
    const flattened = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            element; // number[]
            flattened.push(...element);
        }
        else {
            element; // number
            flattened.push(element);
        }
    }
    return flattened;
}
const flattenedNumbers = flatten(numbers);
console.log('[Ejercicio 4.3]', flattenedNumbers);
// funcion generica
function flattenG(array) {
    const flattenedG = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            flattenedG.push(...element);
        }
        else {
            flattenedG.push(element);
        }
    }
    return flattenedG;
}
const array = ['Hola', 'Argentina', [1, 2, 3], 'Pedro', ['Messi', 'Di Maria']];
const flattenedG = flattenG(array);
console.log('[Ejercicio 2.3]', flattenedG);
