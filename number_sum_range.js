/**
 * sum = 100
 * start limit = 1
 * end limit  = 25
 * length = 5
 * result = [20,20,25,10,25] 
 */


let sum = 200;
let sr = 1;
let el = 25;
let length = 10;
let result = [];

function findNubers(sum, sr, el, length, result) {
if(!checkpossiblity(el,length,sum)){
    return "not a possible combination."
}
if(length*el === sum) {
    return maxPossiblity(el,length);
}
return adjustNumbers(sum, sr, el, length , result,sum);
}
let result1 = findNubers(sum, sr, el, length, result);
let sum1 = result1.reduce(add,0);
console.log("result1===>",result1);
console.log("sume===>",sum1);

function adjustNumbers(sum, sr, el, length, result, fixsum) {
    if(length === 0) {
     return result;
    }
        let value = getRandomArbitrary(sr, el);
        sum = sum - value;
        let newLength = length - 1;
        if(!checkpossiblity(el, newLength, sum) && newLength > 0) {
            sum = sum + value;
            if (sum <= el) {
                value = 0
            } else {
                sum = sum - el;
                value = el;
            }
        }
        if(newLength === 0) {
            value = fixsum - result.reduce(add,0);
        }
        result.push(value);
        length --;
       return adjustNumbers(sum, sr, el, length, result,fixsum);

}

function add(accumulator, a) {
    return accumulator + a;
  }

function checkpossiblity(el, length, sum) {
    return (sum <= el * length && sum > -1)
}

function maxPossiblity(el ,length) {
    let result = [];
    for(let i = 0; i<length; i++) {
        result.push(el);
    }
    return result;
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
