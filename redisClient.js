const { createClient } = require("redis");

const client = createClient({
    url: "redis://localhost:6379"
});

client.on("error", (err) => {
    console.log("Redis Error:", err);
});

(async () => {
    await client.connect();
    console.log("Connected to Redis");
})();

module.exports = client;