// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers(drivers),
    returnLastTwoDrivers(drivers)
]
// selectingDrivers[0](drivers)
// selectingDrivers[1](drivers)

const createFareMultiplier = (num1) => {
    
    return function(num2){
        return num1 * num2
    };
}

const fareQuintupler = createFareMultiplier(5);

fareQuintupler(5)

const fareDoubler = createFareMultiplier(2);

fareDoubler(10)

const fareTripler = createFareMultiplier(3);
fareTripler(12)

const selectDifferentDrivers = (arrayOfDrivers, func) => {
    return func(arrayOfDrivers)
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers)
selectDifferentDrivers(drivers, returnLastTwoDrivers)
