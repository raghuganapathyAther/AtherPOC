const express = require("express");
const dotenv = require("dotenv");

// Route Files
const route1 = require("./routes/predict");

dotenv.config({ path: "./config/config.env" });

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

app.use(logger)

// Mount Routers

app.use("/api/v1/predict", route1);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from POC SERVER",
  });
});

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode and listening on port ${PORT}`
  )
);
