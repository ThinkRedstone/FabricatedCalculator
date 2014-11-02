/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function factor(number){
    if(number < 0){
        return 0;
    }
    if(number === 0){
        return 1;
    }
    
    return number*factor(number-1);
}

function superFactor(number){
    if(number < 0){
        return 0;
    }
    if(number === 0){
        return 1;
    }
    return Math.pow(number,superFactor(number-1));
}

//@fabricated (for real)
function antiFactor(number){
    if(number<0){
        return 0;
    }
    if(number === 0){
        return 1;
    }
    return number/antiFactor(number-1);
}

