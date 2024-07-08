
const nodemailer = require('nodemailer');

const MailService = (email, otp) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "krunalkalathiya11@gmail.com",
            pass: ""
        }
    })

    const mailOptions = {
        from: "krunalkalathiya11@gmail.com",
        to: email,
        subject: "password reset",
        html: `<h1> otp : ${otp}</h1>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }

    });

}


module.exports = MailService