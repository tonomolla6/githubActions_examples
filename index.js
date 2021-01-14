const express = require("express");

const app = express();
const port = process.env.PORT || "6869";

app.get("/", (_, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
