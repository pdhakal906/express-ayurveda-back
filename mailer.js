const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'stmp.gmail.com', // may be smtp.gmail.com
  port: 587,
  secure: false,
  auth: {
    user: "vedaayur720@gmail.com",
    pass: "yfvwkkfwfttfjzly"
  }

})

module.exports = transporter.sendMail.bind(transporter);
