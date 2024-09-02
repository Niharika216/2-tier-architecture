let exObj=require("./ex");

exObj.internalModules();


let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/results", (req, res) => {
  let marksArr = [
    { name: "Niharika", marksList: ["english : 56", "maths : 45"] },
    { name: "Rohan", marksList: ["english : 49", "maths : 95"] },
    { name: "Aditi", marksList: ["english : 34", "maths : 48"] },
  ];
  res.json(marksArr);
});
app.listen(1919, () => {
  console.log("listening to port 1919");
});
