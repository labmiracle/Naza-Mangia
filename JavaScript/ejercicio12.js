//  aleatorio entre 1 y 10

//si ingresamos uno menor muestra mensaje
//si ingresamos uno mayor muestra mensaje

//si la pegas informa fin del juego

function adivina(numero){

  const min = 1;
  const max = 10;
  const random = Math.floor(Math.random() * (max - min + 1) + min);

  if(numero == random){
      console.log('numero correcto! fin del juego');
  }
  if(numero>random){
      console.log('El numero random era '+random+' el numero ingresado es mayor');
  }
  if(numero<random){
     console.log('El numero random era '+random+' el numero ingresado es menor'); 
  }
  return true;
}

//con dificultad adicional
//en vez de pasar un valor, paso un array. Tendra tantos intentos como valores el array
//si en algun intento logra el fin del juego, se rompe el ciclo for
function adivinaPlus(array){

  const min = 1;
  const max = 10;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  
  for (let index = 0; index < array.length; index++) {
      if(array[index] == random){
      console.log('el numero ingresado '+array[index]+' era correcto! fin del juego');
      break;
      }
      if(array[index]>random){
          console.log('El numero random era '+random+' El numero ingresado '+array[index]+' es mayor');
      }
      if(array[index]<random){
      console.log('El numero random era '+random+' el numero ingresado '+array[index]+' es menor'); 
      }
  }
  return true;
}

