let arr: number[] = [10, 20, 30, 40, 50];

let sum: number = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average: number = sum / arr.length;

console.log("Average =", average);
