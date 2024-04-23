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

      // Create a function to fetch and print character details
      const printCharacter = (characterUrl) => {
        // Make a GET request to the character URL
        request(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            // Print the error if a request error occurs
            console.error(charError);
          } else if (charResponse.statusCode !== 200) {
            // Print the status code if it's not 200 (OK)
            console.error(`Failed to fetch character data: ${charResponse.statusCode}`);
          } else {
            // Parse the character data as JSON
            const character = JSON.parse(charBody);

            // Print the character name
            console.log(character.name);
          }
        });
      };

      // Loop through the list of characters and print each one
    movieData.characters.forEach(printCharacter);
    } catch (parseError) {
      // Print the parse error if JSON parsing fails
      console.error('Failed to parse response:', parseError);
    }
  }
});
