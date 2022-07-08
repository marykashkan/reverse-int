module.exports = function reverse (n) {
    let absNumber = Math.abs(n);
    let result = 0;

    while (absNumber) {
        result = (result * 10) + (absNumber % 10);
        absNumber = Math.floor(absNumber / 10);
    };

    return result;  
}
