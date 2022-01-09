const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./route/api/auth.routes");
var morgan = require("morgan")
const app = express();
const db = require("./db/db")


//config
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('common'))

//routes
app.use("/api/auth", authRouter);

//connect to database
db.connectToServer(function (err) {
  if (err) {
    console.error(err);
    pro
  }
})

//run app
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));