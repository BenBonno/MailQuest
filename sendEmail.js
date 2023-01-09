const mailer = require("./mailer");

mailer.sendMail(
  {
    from: "benoit.bonnoron@gmail.com",
    to: "benoit-bonnoron_student2022@wilder.school",
    subject: "Test notification email",
    text: "Hi baby",
    html: "<p>Hello <em>you</em></em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.warn(info);
  }
);
