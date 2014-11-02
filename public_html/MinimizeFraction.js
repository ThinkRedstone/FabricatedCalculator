/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function fillArr(lim) {
    var array = new Array();
    for (var i = 0; i < lim - 1; i++) {
        array[array.length] = array.length + 2;
    }
    return array;
}

function primesUpToX(lim) {
    var arr;
    arr = fillArr(lim);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[j] % arr[i] === 0) {
                    arr[j] = 0;
                }
            }
        }
    }
    return(arr);
}

function readArray(arr) {
    var cleanArr = new Array();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            cleanArr[cleanArr.length] = arr[i];
        }
    }
    return (cleanArr);
}

function primaryFactors(number) {
    var arr;
    arr = primesUpToX(number);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (number % arr[i] !== 0) {
                arr[i] = 0;
            }
        }
    }
    return arr;
}

function minimizeFraction(numeretor, denominator) {
    var log;
    var num = numeretor;
    var den = denominator;
    if (num < den) {
        var arrNum;
        do {
            log = num;
            arrNum = primaryFactors(num);
            for (var i = 0; i < arrNum.length; i++) {
                if (arrNum[i] !== 0) {
                    if (den % arrNum[i] === 0) {
                        num = (num / arrNum[i]);
                        den = (den / arrNum[i]);
                    }
                }

            }
        } while (log !== num)
    } else {
        var arrDen;
        do {
            log = num;
            arrDen = primaryFactors(den);
            for (var i = 0; i < arrDen.length; i++) {
                if (arrDen[i] !== 0) {
                    if (num % arrDen[i] === 0) {
                        num = (num / arrDen[i]);
                        den = (den / arrDen[i]);
                    }
                }

            }

        } while (log !== num);
    }
    var minFraction = new String(num + "/" + den);
    return minFraction;
}





