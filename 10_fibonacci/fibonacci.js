const fibonacci = function(n) {
    if(n <= 2 && n > 0) {
        return 1;
    } else if (n < 0) {
        return "OOPS";
    } else {
      let fibArray = [1, 1]
        for(let i = 2; i < n; i++) {
            fibArray.push(fibArray[i-1] + fibArray[i-2]);
        }
        return fibArray[n-1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
