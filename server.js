const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Sparkboard API" });
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`server listening on port ${port}`));
