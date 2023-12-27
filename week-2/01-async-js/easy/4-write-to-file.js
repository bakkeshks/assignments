const fs = require('fs');

const filename = 'file.txt'; // Replace with your desired filename
const dataToWrite = 'my name is bakkesh';

// Asynchronous file writing
fs.writeFile(filename, dataToWrite, 'utf8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Data written to file successfully!");
  }
});

// Continue executing other code here while the file is being written...
console.log("This message might appear before or after the file writing completes.");
