const app = require("express")();

app.get("/", (req, res) => {
  res.send("Bloodsucking technology company. Sucking the life");
});

app.listen(3000, () => console.log("Running..."))
