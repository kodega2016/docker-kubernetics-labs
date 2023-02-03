const express = require("express");
const app = express();
require("colors");
const redis = require("redis");
const client = redis.createClient({
  socket: {
    host: "redis-server",
    port: 6379,
  },
});

(async () => {
  await client.connect();
})();

const visits_key = "visits";
client.set(visits_key, 0);

app.get("/", async (req, res) => {
  const visits = await client.get(visits_key);
  res.status(200).json({
    success: true,
    data: visits,
    message: "visits is fetched successfully.",
  });
  client.set(visits_key, parseInt(visits) + 1);
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgGreen);
});

process.on("unhandledRejection", (error) => {
  console.log(`server error:${error.message}`);
  server.close();
  process.exit(1);
});
