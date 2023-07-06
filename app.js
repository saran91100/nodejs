const express = require("express")

const app = express()

app.listen(5001, () => console.log("api running in port 5001"))

app.get("/health", (req, res) => res.json("API Health Running Successfully"))