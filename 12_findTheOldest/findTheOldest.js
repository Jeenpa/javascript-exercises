const findTheOldest = function(people) {
    let newPeople = {
        name: "",
        age: 0
    };

    for (const elem of people) {

        elem.yearOfDeath == undefined ? elem.yearOfDeath = new Date().getFullYear() : true;

        if ((elem.yearOfDeath - elem.yearOfBirth) > newPeople.age) {
            console.log(elem.yearOfDeath - elem.yearOfBirth);
            newPeople.name = elem.name;
            newPeople.age = elem.yearOfDeath - elem.yearOfBirth;
        }        
    }

    return newPeople;

};

// Do not edit below this line
module.exports = findTheOldest;
