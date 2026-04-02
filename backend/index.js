import express from "express";
import cors from "cors";
import {testData} from "./testdata.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevLink Backend is running");
});

app.get("/api/resources", (req, res) => {
  const {type} =  req.query;
  let filteredData = testData;

  if(type){
    filteredData = testData.filter(item=> item.type === type);
  }
  res.json(filteredData);
});

app.listen(PORT, () => {
  console.log(`DevLink Backend is running on port ${PORT}`);
});

export default app;
