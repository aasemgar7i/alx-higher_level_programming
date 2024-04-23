#!/usr/bin/node
const request = require('request');

// Check if the URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 2-statuscode.js <url>');
  process.exit(1);
}

const url = process.argv[2];

// Make a GET request to the specified URL
request(url, (error, response) => {
  if (error) {
    // Print the error if a request error occurs
    console.error(error);
  } else {
    // Print the status code of the response
    console.log('code:', response.statusCode);
  }
});
