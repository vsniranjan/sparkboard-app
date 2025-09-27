const mongoose = require("mongoose");

async function connectDB() {
  const conn = await mongoose.connect(process.env.MONGO_URI);
}

mongoose.set("strictQuery", true);

module.exports = connectDB;
