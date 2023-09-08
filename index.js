// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

// const userId = 'john_doe_17091999';

// app.get('/bfhl', (req, res) => {

//   res.json({ operation_code: 1 });
// });

// app.post('/bfhl', (req, res) => {

//   const {
//     college_email,
//     college_roll_number,
//     numbers,
//     alphabets,
//   } = req.body;

//   const highest_alphabet = alphabets.reduce(
//     (max, current) => (current > max ? current : max),
//     'a'
//   );


//   const response = {
//     user_id: userId,
//     is_success: true,
//     college_email,
//     college_roll_number,
//     numbers,
//     alphabets,
//     highest_alphabet,
//   };

//   res.json(response);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

// // Sample user ID based on your format
// const userId = 'john_doe_17091999';

// app.get('/bfhl', (req, res) => {
//   // Handle GET request
//   res.json({ operation_code: 1 });
// });

// app.post('/bfhl', (req, res) => {
//   // Handle POST request
//   const {
//     college_email,
//     college_roll_number,
//     numbers,
//     alphabets,
//   } = req.body;

//   // Calculate the highest alphabet
//   const highest_alphabet = alphabets.reduce(
//     (max, current) => (current > max ? current : max),
//     'a'
//   );

//   // Create the response JSON
//   const response = {
//     user_id: userId,
//     is_success: true,
//     college_email,
//     college_roll_number,
//     numbers,
//     alphabets,
//     highest_alphabet,
//   };

//   res.json(response);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Sample user ID based on your format
const userId = 'john_doe_17091999';

app.get('/bfhl', (req, res) => {
  // Handle GET request
  res.json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  // Handle POST request
  const {
    college_email,
    college_roll_number,
    numbers,
    alphabets,
  } = req.body;

  // Calculate the highest alphabet
  const highest_alphabet = alphabets.reduce(
    (max, current) => (current > max ? current : max),
    'a'
  );

  // Create the response JSON
  const response = {
    user_id: userId,
    is_success: true,
    college_email,
    college_roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
