//Assignment Checking if a number is big

const checkNumber = function (number) {

    if (number > 100) {
        return "true"
    }
    return "false"

};

//const result = checkNumber(425);

//console.log(result);

//Assigment Bouncer at a club

const brendaBouncer = function (maxNumberpeople, curNumberpeople, age) {
    if (age < 18) {
        return ("This is a club for adults, you are not allowed in.")
    }

    if (curNumberpeople >= maxNumberpeople) {
        return ("It's to busy, come back later.")
    }

    return ("Come on in!")

};

const accesGranted = brendaBouncer(70, 60, 18);

//console.log(accesGranted);

//Assignment Calculating the Average

const calculatedAverage = function (numberA, numberB, numberC, numberD, numberE) {
    const sum = numberA + numberB + numberC + numberD + numberE;
    const average = sum / 5;
    return average;

};

const result = calculatedAverage(5, 10, 12, 13, 16);

console.log(result);


