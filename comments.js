// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// Load the comments from the file
let comments = require('./comments.json');

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url);
  const parsedQuery = querystring.parse(parsedUrl.query);
  const path = parsedUrl.pathname;

  // Handle get request
  if (req.method === 'GET') {
    // If the path is /comments
    if (path === '/comments') {
      // Set the response header to JSON
      res.setHeader('Content-Type', 'application/json');
      // Send the comments as JSON
      res.end(JSON.stringify(comments));
    } else {
      // If the path is not /comments, send a 404 response
      res.statusCode = 404;
      res.end();
    }
  } else if (req.method === 'POST') {
    if (path === '/comments') {
      // Set the response header to JSON
      res.setHeader('Content-Type', 'application/json');
      // Create a variable to store the data
      let body = '';
      // When the request receives data, add it to the body
      req.on('data', chunk => {
        body += chunk;
      });
      // When the request ends
      req.on('end', () => {
        // Parse the body of the request
        const comment = JSON.parse(body);
        // Add the comment to the comments array
        comments.push(comment);
        // Write the updated comments to the file
        fs.writeFile('./comments.json', JSON.stringify(comments), () => {
          // Send the comment as JSON
          res.end(JSON.stringify(comment));
        });
      });
    } else {
      // If the path is not /comments, send a 404 response
      res.statusCode = 404;
      res.end();
    }
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});