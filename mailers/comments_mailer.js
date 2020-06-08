const nodeMailer = require('../config/nodemailer');

// This is another way of exporting method
exports.newComment = (comment) => {
  let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

  nodeMailer.transporter.sendMail({
    from: 'shubhamnagpa30@gmail.com',
    to: comment.user.email,
    subject: 'New Comment Published!',
    html: htmlString
  }, (err, info) => {
    if(err) {
      console.log('Error in sending mail', err);
      return;
    }

    console.log('Mail sent', info);
    return;
  });
}