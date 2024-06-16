import { sendEmailFun } from "../utils/sendMail.js";

const sendMail = async (req, res) => {
  try {
    const { email, subject, text } = req.body;
    await sendEmailFun(email, subject, text);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
  }
};

export default { sendMail };