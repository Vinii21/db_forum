const ejs = require("ejs");
const path = require("path");
const transporter = require("./mailer");

const sendMail = (email, doc, attachments) => {
  transporter
    .sendMail({
      from: "vichavarria21@gmail.com",
      to: email,
      subject: "Bienvenido",
      text: "Este seria el mensaje en texto plano",
      html: doc,
      attachments,
    })
    .then(() => console.log("mensaje enviado"))
    .catch((error) => console.log(error));
};

const sendWelcomeMail = async (email, data) => {
  const filePath = path.join(__dirname, "../views/welcome/welcome.ejs");
  const doc = await ejs.renderFile(filePath, data);
  //

  const attachments = [
    {
      filename: "illo_welcome_1.png",
      path: path.join(__dirname, "../views/welcome/images/illo_welcome_1.png"),
      cid: "welcome_image",
    },
    {
      filename: "Logo.png",
      path: path.join(__dirname, "../views/welcome/images/Logo.png"),
      cid: "logo",
    },
    {
      filename: "facebook2x.png",
      path: path.join(__dirname, "../views/welcome/images/facebook.png"),
      cid: "facebook",
    },
    {
      filename: "twitter2x.png",
      path: path.join(__dirname, "../views/welcome/images/twitter2x.png"),
      cid: "twitter",
    },
    {
      filename: "instagram2x.png",
      path: path.join(__dirname, "../views/welcome/images/instagram2x.png"),
      cid: "instagram",
    },
    {
      filename: "pinterest2x.png",
      path: path.join(__dirname, "../views/welcome/images/pinterest2x.png"),
      cid: "pinterest",
    },
  ];

  sendMail(email, doc, attachments);
};

module.exports = {
  sendWelcomeMail,
};

// Analizas
// Resuelves
// codificas