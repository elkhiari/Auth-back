const nodemailer = require('nodemailer');
require('dotenv').config()
exports.sendVerificationEmail = (user) => {
  // Create a transporter object using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Email,
      pass: process.env.Email_PWD
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'elkhiariothmane@gmail.com',
    to: user.email,
    subject: 'Account Verification',
    html: `<html>
           <head>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 background-color: #f2f2f2;
                 padding: 30px;
               }
               .header {
                 text-align: center;
                 background-color: #ffffff;
                 padding: 20px;
                 border-radius: 10px;
                 box-shadow: 2px 2px 10px #cccccc;
               }
               .header h1 {
                 font-size: 36px;
                 color: #0366d6;
                 margin: 0;
               }
               .content {
                 background-color: #ffffff;
                 padding: 20px;
                 border-radius: 10px;
                 box-shadow: 2px 2px 10px #cccccc;
                 margin-top: 30px;
               }
               .content p {
                 font-size: 18px;
                 color: #444444;
                 margin: 0;
                 padding: 0;
               }
               .content a {
                 font-size: 18px;
                 color: #0366d6;
                 text-decoration: none;
               }
             </style>
           </head>
           <body>
             <div class="header">
               <h1>Verify Your Email Address</h1>
             </div>
             <div class="content">
               <p>Dear ${user.firstName},</p>
               <p>Thank you for signing up for our services. In order to activate your account and start using our services, we need to verify that this email address belongs to you.</p>
               <p>Please click the following link to verify your email address:</p>
               <a href="http://localhost:3000/verify-email/${user._id+'?email='+user.email}">Verify Email</a>
             </div>
           </body>
         </html>`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};

