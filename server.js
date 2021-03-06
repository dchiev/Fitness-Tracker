const mongoose = require("mongoose");
const express = require("express");
const mongojs = require("mongojs");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/api_routes.js")(app);
require("./routes/html_routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
