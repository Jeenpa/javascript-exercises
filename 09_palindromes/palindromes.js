const palindromes = function (string) {
    let regex = /[^\w]/g;
    let str = string.replace(regex, "");

    return str.split("").reverse().join("").toLowerCase() === str.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
