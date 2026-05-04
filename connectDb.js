const mongoose = require("mongoose");

function ConnectToDb() {
  mongoose
    .connect("mongodb://localhost:27017/BlogApp")
    .then(() => console.log("Connceted To MOngoDB!"))
    .catch((err) => console.log(err));
}

module.exports = {
    ConnectToDb
}
