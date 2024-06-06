const readlineSync = require('readline-sync');

function findMiddleCharacter() {
    let input = readlineSync.question('Please enter a word: ');
    console.log("Input received:", input);

    if (input.trim().length === 0) {
        console.log("Invalid value");
        return;
    }

    input = input.trim();
    console.log("Trimmed input:", input);

    const length = input.length;
    const middle = Math.floor(length / 2);

    console.log("Length:", length, "Middle index:", middle);

    let result;

    if (length % 2 === 0) {
        result = input.substring(middle - 1, middle + 1);
    } else {
        result = input.charAt(middle);
    }

    console.log("Result:", result);
}

findMiddleCharacter();
