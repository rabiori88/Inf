const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://radi:1234@cluster0.e2e22.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log(`✅ Mongodb connect ..`))
  .catch((err) => console.error(`❌ ${err}`));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port}`);
});
