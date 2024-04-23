#!/usr/bin/node
const fs = require('fs');

// Check if the file path argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 0-readme.js <file_path>');
  process.exit(1);
}

const filePath = process.argv[2];

// Read the content of the file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // Print the error object if an error occurred
    console.error(err);
  } else {
    // Print the content of the file if reading was successful
    console.log(data);
  }
});
