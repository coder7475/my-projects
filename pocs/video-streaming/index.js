import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "node:path";

const app = express();
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname));
  }
})

const multer = upload({ storage });


app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true
}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");// remove in production
  res.header("Access-Control-Allow-Headers",
    "Origin", "X-Requested-With", "Content-Type", "Accept")
  next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("/uploads"));

app.get("/", (_req, res) => {
  res.json({
    "message": "video streaming app running"
  })
});

const port = 8888;
app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
