const mailer = require("./mailer");
require("dotenv").config();

mailer.sendMail(
  {
    from: process.env.FROM,
    to: process.env.TO,
    subject: "Test notification email",
    text: "Hi baby",
    html: "<p>Hello <em>you</em></em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.warn(info);
  }
);
