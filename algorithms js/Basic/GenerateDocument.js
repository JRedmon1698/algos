
//   You're given a string of available characters and a string representing a
//   document that you need to generate. Write a function that determines if you
//   can generate the document using the available characters. If you can generate
//   the document, your function should return true, otherwise it should return false.

//   You're only able to generate the document if the frequency of unique
//   characters in the characters string is greater than or equal to the frequency
//   of unique characters in the document string. For example, if you're given
//   characters = "abcabc" and document = "aabbccc" you cannot generate the document
//   because you're missing one "c."

//   The document that you need to create may contain any characters, including
//   special characters, capital letters, numbers, and spaces.

const generateDocument = (characters, document) => {
    if (document === '') return true;

    characters = characters.split('');
    document = document.split('');

    let charMap = {};
    let docMap = {};

    for (let i = 0; i < characters.length; i++) {
        if (!charMap[characters[i]]) {
            charMap[characters[i]] = 0;
        } 
            charMap[characters[i]] += 1;
    }

    for (let k = 0; k < document.length; k++) {
        if (!docMap[document[k]]) {
            docMap[document[k]] = 0;
        } 
            docMap[document[k]] += 1;
    }

    for (char in docMap) {
        if (!charMap[char]) {
            return false;
        } else if (charMap[char] < docMap[char]) {
            return false;
        }
    }

    return true;
  };
