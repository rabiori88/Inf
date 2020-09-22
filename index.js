const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { User } = require("./model/User");
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`✅ Mongodb connect Success! 🎉 `))
  .catch((err) => console.error(`❌ ${err}`));

app.get("/", (req, res) => {
  res.send("Hello Worldsdfsdf22!");
});

app.post("/register", (req, res) => {
  //회원가입 할때 필요한 정보들을 Client에서 가져오면
  //그것들을 Db에 넣어준다.

  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port}`);
});
