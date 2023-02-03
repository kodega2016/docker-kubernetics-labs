const express = require("express");
const app = express();
require("colors");

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: null,
    message: "server is running...",
  });
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgGreen);
});

process.on("unhandledRejection", (err) => {
  console.log(`server error:${err.message}`.bgRed);
  server.close();
  process.exit(1);
});
