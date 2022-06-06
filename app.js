const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.json({
    message: "Entry point"
  })
})

const port = 2347

app.listen(port, () => {
  console.log("app started on 2347");
})