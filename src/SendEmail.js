import nodemailer from "nodemailer";

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// Send email

const EmailSender = ({ fullName, email, phone, message }) => {
  const options = {
    from: `Portfolio 💵 <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: "Message From Portfolio",
    html: `<div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
    <p style="font-weight: 800; font-siz: 1.2rem; padding: 0 30px">
      Form Portfolio
    <p>
    <div style="font-size: .8rem; margin: 0 30px">
     <p>FullName: <d>${fullName}</b></p>
     <p>Email: <d>${email}</b></p>
     <p>Phone: <d>${phone}</b></p>
     <p>Message: <i>${message}</i></p>
    </div>
    <div>`,
  };

  Email(options);
};

export default EmailSender;
