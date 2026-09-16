let words = ["apple", "banana", "ant", "ball", "cat", "car"];

let groupedWords = new Map();

for (let word of words) {
    let firstChar = word[0];

    if (!groupedWords.has(firstChar)) {
        groupedWords.set(firstChar, []);
    }

    groupedWords.get(firstChar).push(word);
}

console.log(groupedWords);
