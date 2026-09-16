"use strict";
function binaryToDecimal(binary) {
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        const digit = Number(binary[i]);
        if (digit !== 0 && digit !== 1) {
            throw new Error("Invalid binary number.");
        }
        decimal = decimal * 2 + digit;
    }
    return decimal;
}
const binary = "1011";
const decimal = binaryToDecimal(binary);
console.log("Binary:", binary);
console.log("Decimal:", decimal);
