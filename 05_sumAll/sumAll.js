const sumAll = function(num1, num2) {
    let sum = 0;
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || max < 0 || min < 0) {
      return 'ERROR'
    } else {
    while(max >= min) {
        sum += min;
        min++;
    }
    return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
