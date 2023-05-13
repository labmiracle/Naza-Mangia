function padLeft(value: string, padding: number | string): string {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`El valor de 'padding' no es válido: ${padding}`);
}

console.log('[Ejercicio 4.2]', `
   ${padLeft('', 0)}
   ${padLeft('', '')}
   ${padLeft('Hello', 5)}
   ${padLeft('Hello', 'asdasd')}
   
  
   `);



