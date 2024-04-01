const sumAll = function(nmr1, nmr2) {
    let acc = 0;

    if (nmr1 < 0 || nmr2 < 0) return "ERROR";

    if ((typeof nmr1 != "number") || (typeof nmr2 != "number")) return "ERROR";

    if (nmr1 > nmr2) {
        let aux = nmr2;
        nmr2 = nmr1;
        nmr1 = aux;
    }

    for (let i = nmr1; i <= nmr2; i++) {
        acc+=  i;       
    }

    return acc;
};

// Do not edit below this line
module.exports = sumAll;
