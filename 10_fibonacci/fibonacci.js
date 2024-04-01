const fibonacci = function(n) {
    let nmr = parseInt(n);

    return nmr < 2 && nmr >= 0 ? nmr 
    : nmr >= 2 ? fibonacci(nmr - 1) + fibonacci(nmr - 2)
    : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
