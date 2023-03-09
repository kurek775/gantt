import express, {Request, Response} from "express";
import cors from "cors";
import ProjectModel from "./models/Project";
import { MongoClient} from 'mongodb'
import { config } from 'dotenv';
import mongoose from "mongoose";
import { createProjectController } from "./controllers/createProjectController";
config();
const app = express();
const PORT: number = 5000;

app.use(
    cors({
        origin: "*"
    })
)
app.post("/api/project",createProjectController);
    
 


app.get("/api/projects", (req: Request, res: Response) =>{

  const responseData = [
    {
        "name": "akvizice nvm penize azio",
        "id": 1,
        "tasks": [
            {
                "id": 2,
                "name": "testing",
                "note": "testovani neceho",
                "periods": [
                    {
                        "start": "1/12/2020",
                        "end": "1/25/2020"
                    },
                    {
                        "start": "1/27/2020",
                        "end": "1/29/2020"
                    }
                ]
            },
            {
                "id": 4,
                "name": "testing 5",
                "note": "testovani niceho",
                "periods": [
                    {
                        "start": "1/19/2020",
                        "end": "1/25/2020"
                    },
                    {
                        "start": "1/30/2020",
                        "end": "2/5/2020"
                    }
                ]
            }
        ]
    },
    {
        "name": "akvizice dva",
        "id": 5,
        "tasks": [
            {
                "id": 2,
                "name": "testing",
                "note": "testovani neceho",
                "periods": [
                    {
                        "start": "1/5/2020",
                        "end": "1/15/2020"
                    },
                    {
                        "start": "1/27/2020",
                        "end": "1/29/2020"
                    }
                ]
            },
            {
                "id": 4,
                "name": "testing 5",
                "note": "testovani niceho",
                "periods": [
                    {
                        "start": "1/9/2020",
                        "end": "1/22/2020"
                    },
                    {
                        "start": "1/30/2020",
                        "end": "2/5/2020"
                    }
                ]
            }
        ]
    }
]
  res.send(responseData)
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
  });