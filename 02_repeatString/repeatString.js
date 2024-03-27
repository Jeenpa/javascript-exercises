const repeatString = function(string, num) {
    let acc = '';

    if (num < 0) {
        return "ERROR"
    } else{
        for (let i = 0; i < num; i++) {
            acc = acc + string;
        }
    }

    return acc;
};

// Do not edit below this line
module.exports = repeatString;
