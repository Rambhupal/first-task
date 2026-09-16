const array1 = [1, 2, 3, 4, 5];

const array2 = [3, 4, 5, 6, 7];

const commonElements = array1.filter(element =>
    array2.includes(element)
);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Common elements:", commonElements);