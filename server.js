const app = require("express")();

app.get("/", (req, res) => {
  res.send("Go go badger racers x6");
});

app.listen(3000, () => console.log("Running..."))
