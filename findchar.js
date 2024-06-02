function findCharacter(string, char) {
    let indices = [];
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            indices.push(i);
        }
    }
    return indices;
}

// Example usage:
let str = "Hello, world!";
let characterToFind = 'o';
let foundIndices = findCharacter(str, characterToFind);
console.log("Indices of '" + characterToFind + "' in '" + str + "': ", foundIndices);
