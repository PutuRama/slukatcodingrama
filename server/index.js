const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./route/api/auth.routes");
const userRouter = require("./route/api/user.routes");
const adminAuthRouter = require("./route/admin/auth.route");
var morgan = require("morgan")
const app = express();
const db = require("./db/db")


//config
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('common'))

//routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);


// admin route
app.use("/admin/auth",adminAuthRouter);

//connect to database
db.connectToServer(function (err) {
  if (err) {
    console.error(err);

  }
})

//run app
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));