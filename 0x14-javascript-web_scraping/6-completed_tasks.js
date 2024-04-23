#!/usr/bin/node
const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 6-completed_tasks.js <api_url>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Make a GET request to the specified API URL
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
      const todos = JSON.parse(body);

      // Initialize an object to store the number of completed tasks for each user ID
      const completedTasksByUserId = {};

      // Loop through the todos and count completed tasks for each user ID
      todos.forEach(todo => {
        if (todo.completed) {
          if (!completedTasksByUserId[todo.userId]) {
            completedTasksByUserId[todo.userId] = 1;
          } else {
            completedTasksByUserId[todo.userId]++;
          }
        }
      });

      // Print the number of completed tasks for each user ID
      console.log(completedTasksByUserId);
    } catch (parseError) {
      // Print the parse error if JSON parsing fails
      console.error('Failed to parse response:', parseError);
    }
  }
});
