import { Request, Response } from "express";
import ProjectModel from "../models/Project";

export async function createProjectController(req: Request, res: Response) {
 
    const newProject = new ProjectModel({
        name: req.body.name,
        tasks: [],
        owner: req.body.owner
    })

    const createdProject = newProject.save();
    const projects = await ProjectModel.find({owner: req.body.owner})
    res.send(projects)
  
}