import express, {Request, Response} from "express";
import cors from "cors";
const app = express();
const PORT: number = 5000;

app.use(
    cors({
        origin: "*"
    })
)

app.get("/", (req: Request, res: Response) =>{
  res.send("hello")
});


app.listen(PORT);
