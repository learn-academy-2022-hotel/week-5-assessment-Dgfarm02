// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeMachine", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it(`Takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.`, () => {
        expect(codeMachine(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        // Expected output: "L4ck4d41s1c4l"
        expect(codeMachine(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        // Expected output: "G0bbl3dyg00k"
        expect(codeMachine(secretCodeWord3)).toEqual("3cc3ntr1c")
        // Expected output: "3cc3ntr1c"
    })
})

// RED - GOOD FAILURE
// FAIL  ./code-challenges.test.js
// codeMachine
//   ✕ Takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0. (1 ms)

// ● codeMachine › Takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

//   expect(received).toEqual(expected) // deep equality

//   Expected: "L4ck4d41s1c4l"
//   Received: undefined

// b) Create the function that makes the test pass.

const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"
// create a function named codeMachine that takes in a string
const codeMachine = (str) => {
    // return the string with the changes below
    return str
    // this will split the string into an array of separate characters
    .split("")
    // this will iterate through our array we just created and look for every index that matches our conditions below
    .map((v) => {
      if (v === "a" || v === "A") {
        // and each index will return a different value instead
        return 4;
      } else if (v === "e" || v === "E") {
        return 3;
      } else if (v === "i" || v === "I") {
        return 1;
      } else if (v === "o" || v === "O") {
        return 0;
      } else {
        return v;
      }
    })
    // this will join the array back to a string
    .join("");
};

// GREEN - SUCCESS
// PASS  ./code-challenges.test.js
// codeMachine
//   ✓ Takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.193 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letterFinder", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
    expect(letterFinder(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
    expect(letterFinder(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
    // Expected output: ["Cherry", "Blueberry", "Peach"]
})

// RED - GOOD FAILURE
// FAIL  ./code-challenges.test.js
// letterFinder
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// ● letterFinder › takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//   ReferenceError: letterFinder is not defined

// b) Create the function that makes the test pass.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
const letterE = "e"
// Createa a function called letterFinder that takes in an array and a string
const letterFinder = (arr, ltr) => {
    // this returns the array with a filter that only includes indexes that include whatever is included in the ltr variable
    return arr.filter((v) => v.includes(ltr) || v.includes(ltr.toUpperCase()))
}

// GREEN - SUCCESS
// PASS  ./code-challenges.test.js
// letterFinder
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s
// Ran all test suites.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {

    const hand1 = [5, 5, 5, 3, 3]
    expect(fullHouse(hand1)).toEqual(true)
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    expect(fullHouse(hand2)).toEqual(false)
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    expect(fullHouse(hand3)).toEqual(false)
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    expect(fullHouse(hand4)).toEqual(true)
    // Expected output: true
    })
})

// b) Create the function that makes the test pass.

const hand1 = [5, 5, 5, 3, 3]
const hand2 = [5, 5, 3, 3, 4]
const hand3 = [5, 5, 5, 5, 4]
const hand4 = [7, 2, 7, 2, 7]
// Create a function called fullHouse that takes in an array
const fullHouse = (arr) => {
    // create a new empty object 
    const hand = {};
    // iterate through the array and count each time an index contains a specific number put that in the empty object
    arr.forEach((card) => {hand[card] = hand[card] ? hand[card] + 1 : 1});
    //create a variable that returns the hand object back to an array 
    const sets = Object.values(hand);
    // returns true if the sets variable includes 2 of the same number and 3 of the same number, otherwise it will return false
    return sets.includes(2) && sets.includes(3) ? true : false
}

// GREEN - SUCCESS
// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a full house. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.17 s
// Ran all test suites.


