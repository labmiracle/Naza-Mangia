function onlyUniques(...arg){
    let diferentes = [];

    for (let i = 0; i < arg.length;i++){
        if(diferentes.indexOf(arg[i]) === -1) {
            diferentes.push(arg[i]);
        } 
    }

    return diferentes;
}