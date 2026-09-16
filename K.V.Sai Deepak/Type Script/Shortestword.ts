let str: string = "Java is very easy";

let words: string[] = str.split(" ");

let shortest: string = words[0];

for (let i = 1; i < words.length; i++) {

    if (words[i].length < shortest.length) {
        shortest = words[i];
    }
}

console.log("Shortest word:", shortest);
