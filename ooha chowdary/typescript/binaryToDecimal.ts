function binaryToDecimal(binary: string): number {

    let decimal: number = 0;

    for (let i = 0; i < binary.length; i++) {

        const digit: number = Number(binary[i]);

        if (digit !== 0 && digit !== 1) {
            throw new Error("Invalid binary number.");
        }

        decimal = decimal * 2 + digit;
    }

    return decimal;
}

const binary: string = "1011";

const decimal: number = binaryToDecimal(binary);

console.log("Binary:", binary);
console.log("Decimal:", decimal);