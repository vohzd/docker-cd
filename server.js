const app = require("express")();

app.get("/", (req, res) => {
  res.send("Go go badger racers x5");
});

app.listen(3000, () => console.log("Running..."))
