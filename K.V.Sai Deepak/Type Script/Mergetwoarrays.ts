let a: number[] = [1, 2, 3];

let b: number[] = [4, 5, 6];

let c: number[] = [];

for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
}

for (let i = 0; i < b.length; i++) {
    c.push(b[i]);
}

console.log(c);
