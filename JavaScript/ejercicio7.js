let count = 0;

function cc(card) {
    if(typeof card === "string") {
        if(card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
            count += -1
        }

    }

    if(typeof card === "number") {
        if (card == 10){
            count += -1
        } 
        if (card >= 2 && card <=6){
            count += 1
        }
    }
    
    if (count >= 0){
        return "El total es " + count + " Bet"
    } else {
        return "El total es " + count + " Hold"
    }


}