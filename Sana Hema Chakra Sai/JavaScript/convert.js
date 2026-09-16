let str = "hello world from javascript";

let words = str.split(" ");

let result = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(result.join(" "));
