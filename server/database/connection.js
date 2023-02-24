const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectionToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/UMS");
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectionToDB;