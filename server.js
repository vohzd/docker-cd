const app = require("express")();

app.get("/", (req, res) => {
  res.send("Go go badger racers x7");
});

app.listen(3000, () => console.log("Running..."))
