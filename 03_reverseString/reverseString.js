const reverseString = function(string) {
    let stringLength = string.length;
    let backwards = '';
    for (let i = stringLength - 1; i >= 0; i--) {
        backwards += string.charAt(i);
    }
    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
