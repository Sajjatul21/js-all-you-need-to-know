function makeWords(text) {
    try {
        let str = text.trim();
        console.log(str);
        let words = str.split(" ");
        return words;
    }
    catch (e) {
        // console.log(e)
        // console.dir(e)
        // return (e.message)
        return "Please provide a text";
    }
}

// let words = makeWords("            kkfjal lkal ;jfja;  kjjj        ");
let words = makeWords(54);
console.log(words);