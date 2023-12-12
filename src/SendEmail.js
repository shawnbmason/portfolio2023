import nodemailer from "nodemailer";

const Email = (options) => {
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
};
