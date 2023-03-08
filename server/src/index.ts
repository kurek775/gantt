import express, {Request, Response} from "express";
import cors from "cors";
const app = express();
const PORT: number = 5000;

app.use(
    cors({
        origin: "*"
    })
)

app.get("/projects", (req: Request, res: Response) =>{

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
                        "start": "11/1/2020",
                        "end": "12/1/2020"
                    },
                    {
                        "start": "15/1/2020",
                        "end": "18/1/2020"
                    }
                ]
            },
            {
                "id": 4,
                "name": "testing 5",
                "note": "testovani niceho",
                "periods": [
                    {
                        "start": "19/1/2020",
                        "end": "25/1/2020"
                    },
                    {
                        "start": "30/1/2020",
                        "end": "5/2/2020"
                    }
                ]
            }
        ]
    }
]
  res.send(responseData)
});


app.listen(PORT);
