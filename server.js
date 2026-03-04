const express = require("express");
const bookSeat = require("./booking");

const app = express();

app.use(express.json());

app.post("/book/:seatId", async (req, res) => {

    const seatId = req.params.seatId;

    const result = await bookSeat(seatId);

    res.json(result);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});