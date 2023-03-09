import { Request, Response } from "express";
import ProjectModel from "../models/Project";

export async function createProjectController(req: Request, res: Response) {
    console.log(req.body);
    const newProject = new ProjectModel({
        name: req.body?.name,
        tasks: [""]
    })

    const createdProject = newProject.save();
    res.json(createdProject);
}