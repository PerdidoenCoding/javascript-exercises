const palindromes = function (str) {
    let matched = str.toLowerCase().match(/[a-zA-Z0-9]/g).join('');
    let reversed = matched.split('').reverse().join('');
    if(matched == reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
