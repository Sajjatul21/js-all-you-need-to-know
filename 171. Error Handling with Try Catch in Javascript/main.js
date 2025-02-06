function makeWords(text) {
    let str = text.trim();
    console.log(str);
    let words = str.split(" ");
    return words;
}

// let words = makeWords("            kkfjal lkal ;jfja;  kjjj        ");
let words = makeWords(54);
console.log(words);