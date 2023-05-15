const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array: (number | number[])[]): number[] {
  const flattened: number[] = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      element; // number[]
      flattened.push(...element);
    } else {
      element; // number
      flattened.push(element);
    }
  }

  return flattened;
}

const flattenedNumbers: number[] = flatten(numbers);

console.log('[Ejercicio 4.3]', flattenedNumbers);

// funcion generica
function flattenG<T>(array: (T | T[])[]): T[] {
    const flattenedG: T[] = [];
  
    for (const element of array) {
      if (Array.isArray(element)) {
        flattenedG.push(...element);
      } else {
        flattenedG.push(element as T);
      }
    }
  
    return flattenedG;
  }
  
  const array: (string | number | (number[]) | (string[]) | string)[] = ['Hola', 'Argentina', [1,2,3] , 'Pedro', ['Messi', 'Di Maria']];
  const flattenedG: (string | number)[] = flattenG(array);
  
  console.log('[Ejercicio 2.3]', flattenedG);
  