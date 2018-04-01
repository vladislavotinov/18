var nodemailer = require('nodemailer');




module.exports.sendMail = function(text,email,err)
{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'geonreinme@gmail.com',
    pass: 'geonrein123'
  },
   tls: {
        rejectUnauthorized: false
   }
});

var mailOptions = {
  from: 'geon_reinme@gmail.com',
  to: email,
  subject: 'Message',
  text: text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
   return(error);
  } else {
    console.log("Sended");
  }
});


}