// ************** Send API **************
import express from "express";
import EmailSender from "./SendEmail.js";
import dotenv from "dotenv";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
dotenv.config();

app.post("/send", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    EmailSender({ fullName, email, phone, message });
    res.json({ msg: "Your message was sent successfully!" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
