#!/usr/bin/node
const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 4-starwars_count.js <api_url>');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = '18'; // ID of Wedge Antilles character

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
      const filmsData = JSON.parse(body);

      // Count the number of movies where Wedge Antilles is present
      const count = filmsData.results.reduce((total, film) => {
        // Check if the character ID is present in the characters array
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
          return total + 1;
        }
        return total;
      }, 0);

      // Print the count of movies
      console.log(count);
    } catch (parseError) {
      // Print the parse error if JSON parsing fails
      console.error('Failed to parse response:', parseError);
    }
  }
});
