import { Request, Response } from "express";
import ProjectModel from "../models/Project";


export async function createTaskController(req: Request, res: Response) {
 
    const newTask = ({
     name: req.body.task,
     note: req.body.note,
     periods: [{start:req.body.start,end:req.body.end}]
    })


    const project = await ProjectModel.findByIdAndUpdate(
        req.body.taskproject,{
            $push: {
                tasks:{
                    $each: [newTask],
                }
            } 
        }
       )

       res.json(project)

   
  
}