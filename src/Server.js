// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000; // Define the port

// Middleware for parsing JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a route to handle form submissions
app.post('/submit-form', (req, res) => {
  const { firstname, lastname, email, subject, message } = req.body;

  // Create a transporter to send emails
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'yxw5424@hotmail.com',
      pass: 'Wyf19970228!',
    },
  });


  module.exports = transporter;

  // Email details
  const mailOptions = {
    from: 'yxw5424@hotmail.com',
    to: 'tim.wang@mae.com.sg',
    subject: 'New Form Submission',
    text: `First Name: ${firstname}, Last Name: ${lastname}\nEmail: ${email}\n Subject: ${subject}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
