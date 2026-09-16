let words = ["apple", "ant", "banana", "ball", "cat", "car"];

let map = new Map();

for (let word of words) {
    let firstChar = word[0];

    if (!map.has(firstChar)) {
        map.set(firstChar, []);
    }

    map.get(firstChar).push(word);
}

console.log(map);
