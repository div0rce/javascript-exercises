const sumAll = function(x, y) {
    let sum = x + y;
    let temp;
    if (x < 0 || y < 0) {
        return "ERROR";
    }
    else if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
        return "ERROR"
    }
    else if (x > y) {
        temp = x;
        x = y;
        y = temp;
    }
    for (let i = x + 1; i < y; i++){
        sum += i;
    }
    return sum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
