const birthDate = new Date("2002-01-15");

const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const monthDifference = today.getMonth() - birthDate.getMonth();

if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
) {
    age--;
}

console.log("Date of Birth:", birthDate.toDateString());
console.log("Current Date:", today.toDateString());
console.log("Age:", age);