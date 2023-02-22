// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (function() {
    let firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers
})

const returnLastTwoDrivers = (function() {
    let lastTwoDrivers = drivers.slice(2, 4)
    return lastTwoDrivers 
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    return function(fare) {
        return fare * num
    }
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;


const selectDifferentDrivers = (drivers, a) => {
    if (a === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers();
    } else if (a === returnLastTwoDrivers) {
        return returnLastTwoDrivers();
    }
}
