const nodeMailer = require('../config/nodemailer');

// This is another way of exporting method
exports.newComment = (comment) => {
  console.log('Inside newComment mailer', comment);

  nodeMailer.transporter.sendMail({
    from: 'shubhamnagpa30@gmail.com',
    to: comment.user.email,
    subject: 'Ne Comment Published!',
    html: '<h1>Your comment is now published!</h1>'
  }, (err, info) => {
    if(err) {
      console.log('Error in sending mail', err);
      return;
    }

    console.log('Mail sent', info);
    return;
  });
}