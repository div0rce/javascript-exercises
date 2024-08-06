const removeFromArray = function(array, ...num) {
    array.push(...num);
    let uniqueArray = Array.from(new Set(array));

    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < uniqueArray.length; j++){
            if (num[i] === uniqueArray[j]) {
                uniqueArray.splice(j, 1);
            }
        }
    }

    return uniqueArray;
};

// Do not edit below this line
module.exports = removeFromArray;
