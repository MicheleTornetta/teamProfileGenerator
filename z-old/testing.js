// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

fs.writeFileSync

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) => //arrow functions work great as callbacks
  error ? console.error(error) : console.log(data) // terinary is the light blue area - have the condition in the beginning - condition ? valueIfTrue : valueIfFalse - in this case will console log if there's an error (one line if statement) or it will print the data
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

//in a data.cvs file:  10,123,76,5003,9,0.127,40,-1,2^4

--------------------------------------------

const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(function(data) {
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be? 
const primeArray = originalArray.filter(isPrime);
console.log(primeArray);

// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
const moreThan5Array = originalArray.filter(num => num > 5);
console.log(moreThan5Array);

//Filter - if it's true it will be saved

----------------------------------------------------------

const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

console.log(tripledArray);
console.log(oddOrEven);


//Map - if it's true it will be saved

-------------------------------------------------
-------------------------------------------------
INSTRUCTOR HINTS 

in generateMarkdown.js

review readme guide see line 15 which has initial # (markdown)

sections will need to be inside function on line 14 

example:

get started in index

-----------------------------------------------------------------

// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "Suspicous Minds",
  artist: "Elvis Presley",
  album: "From Elvis in Memphis"
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `${music.title}, ${music.artist}, ${music.album}`;

console.log(songSnippet);

const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${music.album}</title>
</head>
<body>
  <h1>${music.album}</h1>
  <h2>${music.title}</h2>
  <h2>${music.artist}</h2>
</body>
</html>`;
console.log(page);

// TODO: Include packages needed for this application
   // https://www.youtube.com/watch?v=TlB_eWDSMt4


//Create a template for the information
/*const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${#Title}</title>
</head>
<body>
  <h1>${music.album}</h1>
  <h2>${music.title}</h2>
  <h2>${music.artist}</h2>
</body>
</html>`;*/