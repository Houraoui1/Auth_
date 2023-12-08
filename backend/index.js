const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();


app.use(cors());
app.use(
  express.json({
    limit: "10mb",
  })
);

const PORT = process.env.PORT || 8080;

console.log(process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connecting to database"))
  .catch((error) => console.log(error, "not connecting to database"));

//shema

//api
app.get("/", (req, res) => {
  res.send("server is runing ");
});

// // for the signup  check
// app.post("/signup", async (req, res) => {

//   try {
//     const { email } = req.body;
//     const data = await mongomodel.findOne({ email: email });

//     if (data) {
//       res.send({ messagefalse: "email is already register", alert: false });
//     } else {
//       const data = mongomodel(req.body);
//       const save = data.save();
//       res.send({ messagesucces: "is saved seccessfuly", alert: true });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// for login check
app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { email } = req.body;
    const data = await mongomodel.findOne({ email: email });

    if (data) {
      const datasend = {
        email: data.email,
        password: data.password,

      };
      console.log(datasend);
      res.send({ messagesucces: "login is valide", data: datasend });
    } else {

      res.send({ messagefalse: "invalid login" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => console.log("server runing hello  " + PORT));
