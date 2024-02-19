import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   console.log("Home");
// });

app.listen(3000, () => {
  console.log("====================================");
  console.log("Server Running @ 3000 !!");
  console.log("====================================");
});
