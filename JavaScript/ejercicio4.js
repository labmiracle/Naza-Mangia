function palabraMasLarga(str) {
    const palabras = str.split(" ");
    let palabraMasLarga = "";

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

//--------------------

function primeraMayuscula(str) {
    const palabras = str.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }

    return palabras.join(" ");
}

// Prueba para la función palabraMasLarga(str)
const frase1 = 'Erase una vez que se era';
const resultado1 = palabraMasLarga(frase1);
console.log(resultado1); // Debe imprimir 'Erase'
console.assert(resultado1 === 'Erase', "La palabra más larga no coincide con el resultado esperado");

// Prueba para la función primeraMayuscula(str)
const frase2 = 'En un lugar de la Mancha';
const resultado2 = primeraMayuscula(frase2);
console.log(resultado2); // Debe imprimir 'En Un Lugar De La Mancha'
console.assert(resultado2 === 'En Un Lugar De La Mancha', "La capitalización de la primera letra no coincide con el resultado esperado");
