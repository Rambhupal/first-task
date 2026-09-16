let num = 25;

let roman = "";

while (num >= 10) {
    roman = roman + "X";
    num = num - 10;
}

while (num >= 5) {
    roman = roman + "V";
    num = num - 5;
}

while (num >= 1) {
    roman = roman + "I";
    num = num - 1;
}

console.log(roman);
