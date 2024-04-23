#!/usr/bin/node
const fs = require('fs');
const request = require('request');

// Check if both URL and file path arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node 5-request_store.js <url> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    // Print the error if a request error occurs
    console.error(error);
  } else if (response.statusCode !== 200) {
    // Print the status code if it's not 200 (OK)
    console.error(`Failed to fetch data: ${response.statusCode}`);
  } else {
    // Write the body response to the file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        // Print the error if a file write error occurs
        console.error(err);
      }
    });
  }
});
