#!/usr/bin/node
const request = require('request');

// Check if the Movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 101-starwars_characters.js <movie_id>');
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

      // Function to print characters recursively
      const printCharacters = (characters, index) => {
        if (index >= characters.length) {
          return; // Base case: stop recursion when all characters are printed
        }

        // Make a GET request to the character URL
        request(characters[index], (charError, charResponse, charBody) => {
          if (charError) {
            // Print the error if a request error occurs
            console.error(charError);
            // Exit recursion in case of error
          } else if (charResponse.statusCode !== 200) {
            // Print the status code if it's not 200 (OK)
            console.error(`Failed to fetch character data: ${charResponse.statusCode}`);
            // Exit recursion in case of error
          } else {
            // Parse the character data as JSON
            const character = JSON.parse(charBody);
            // Print the character name
            console.log(character.name);
            // Recursively print the next character
            printCharacters(characters, index + 1);
          }
        });
      };

      // Start printing characters recursively
      printCharacters(movieData.characters, 0);
    } catch (parseError) {
      // Print the parse error if JSON parsing fails
      console.error('Failed to parse response:', parseError);
    }
  }
});
