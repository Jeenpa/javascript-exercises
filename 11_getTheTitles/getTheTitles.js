const getTheTitles = function(books) {
    let titleBooks = [];

    for (const elem of books) {
        titleBooks.push(elem.title);     
    }

    return titleBooks;

};

// Do not edit below this line
module.exports = getTheTitles;
