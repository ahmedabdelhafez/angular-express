import * as nodemail from "nodemailer";

//////////////

const transporter = nodemail.createTransport({
  service: "gmail",
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: false,
  auth: {
    user: "ahmedfezohassan@gmail.com",
    pass: "ahmedmedomedo"
  }
});

export const sendMail = function(userEmail) {
  return transporter.sendMail({
    from: "ahmedfezohassan@gmail.com",
    to: userEmail,
    subject: "test mail ya man",
    text: "how are you",
    html: `
      <a href="http://localhost:4200/create-password">Redirect to create password</a>
      `
  });
};
