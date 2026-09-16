function isPrime(num: number): boolean {

    if (num < 2) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {

        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const start: number = 10;
const end: number = 50;

console.log(`Prime numbers between ${start} and ${end}:`);

for (let i = start; i <= end; i++) {

    if (isPrime(i)) {
        console.log(i);
    }
}