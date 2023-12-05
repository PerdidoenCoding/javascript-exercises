const repeatString = function(str, num) {
    let newStr = '';
    let i =0;
    if (num < 0) {
        return 'ERROR'
    } else {
    while (i < num){
    i++;
    newStr += str;
   }
    }

   return newStr;
};

// Do not edit below this line
module.exports = repeatString;
