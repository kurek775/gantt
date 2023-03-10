import express, {Request, Response} from "express";
import cors from "cors";
import ProjectModel from "./models/Project";
import { MongoClient} from 'mongodb'
import { config } from 'dotenv';
import mongoose from "mongoose";
import { createProjectController } from "./controllers/createProjectController";
import { loginUserController } from "./controllers/loginUserController";
import { createUserController } from "./controllers/createUserController";
import { getProjectController } from "./controllers/getProjectController";
config();
const app = express();
const PORT: number = 5000;

app.use(express.json());
app.use(cors());
app.post("/api/project",createProjectController);   
app.post("/api/projects", getProjectController);

app.post("/api/login", loginUserController);
app.post("/api/register", createUserController);


mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
  });