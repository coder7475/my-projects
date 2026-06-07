import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true
}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

app.get("/", (_req, res) => {
  res.json({
    "message": "video streaming app running"
  })
});

const port = 8888;
app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
