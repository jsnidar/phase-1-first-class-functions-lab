// Code your solution in this file!
function returnFirstTwoDrivers(arrayOfDrivers) {
    return arrayOfDrivers.slice(0,2)
}

function returnLastTwoDrivers(array) {
    const arrOfLastTwo = array.slice(array.length - 2)
    return arrOfLastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

// fareDoubler
//declare a variable with const
const fareDoubler = createFareMultiplier(2)
//assign a function returned by createFareMultiplier() to it
//invoke fareDoubler() in such a way that:
    //the new fareDoubler function accepts a fare as its lone argument
    //it doubles that amount


const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    return func(drivers) 
    }