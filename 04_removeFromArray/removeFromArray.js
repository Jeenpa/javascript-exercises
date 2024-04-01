const removeFromArray = function(arr, ...del) {
    return arr.filter(el => !del.includes(el));    
};

// Do not edit below this line
module.exports = removeFromArray;
