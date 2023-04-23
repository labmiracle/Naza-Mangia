function sumArg(array){
    let count = 0;
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === 'number') { 
            count += array[i];
        }
     
    }

    return count;
}