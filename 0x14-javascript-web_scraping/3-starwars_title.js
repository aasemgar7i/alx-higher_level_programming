#!/usr/bin/node
const request = require('request');

// Check if the movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API endpoint
request(apiUrl, (error, response, body) => {
  if (error) {
    // Print the error if a request error occurs
    console.error(error);
  } else if (response.statusCode !== 200) {
    // Print the status code if it's not 200 (OK)
    console.error(`Failed to fetch data: ${response.statusCode}`);
  } else {
    try {
      // Parse the response body as JSON
      const movieData = JSON.parse(body);

      // Print the title of the movie
      console.log(movieData.title);
    } catch (parseError) {
      // Print the parse error if JSON parsing fails
      console.error('Failed to parse response:', parseError);
    }
  }
});
