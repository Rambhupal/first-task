let arr = [10, 5, 8, 3, 6];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let num of arr) {

    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    }
    else if (num > smallest && num < secondSmallest) {
        secondSmallest = num;
    }
}

console.log("Smallest =", smallest);
console.log("Second Smallest =", secondSmallest);
