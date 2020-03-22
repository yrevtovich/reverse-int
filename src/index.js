module.exports = function reverse (n) {
    let currentNumber;
    if ( n >= 0) {
        currentNumber = n.toString();
    } else {
        currentNumber = (0-n).toString();
    }

    let newNumber = '';

    for (let i = currentNumber.length - 1; i >= 0; i--) {
        newNumber += currentNumber[i];
    }

    return +newNumber;
}
