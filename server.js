const path = require("path");
import express from "express";
import dotenv from "dotenv";

dotenv.config();
///////
const app = express();

// << load angular app index.html file >> //
app.use(express.static(__dirname + "/dist"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist", "index.html"));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log("app run well");
});
