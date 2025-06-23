const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Web App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1 {
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to My Web App</h1>
          <p>This is a simple web application running on Express.js</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000 , () => {
  console.log(`Server running at http://localhost:${port}`);
}); 