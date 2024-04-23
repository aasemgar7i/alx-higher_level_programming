#!/usr/bin/node
const fs = require('fs');

// Check if both file path and string to write are provided
if (process.argv.length !== 4) {
  console.error('Usage: node 1-writeme.js <file_path> "<string_to_write>"');
  process.exit(1);
}

const filePath = process.argv[2];
const content = process.argv[3];

// Write the string to the file
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    // Print the error object if an error occurred
    console.error(err);
  }
});
