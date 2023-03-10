import { Request, Response } from "express";
import ProjectModel from "../models/Project";

export async function getProjectController(req: Request, res: Response) {
 
   const projects = await ProjectModel.find({owner: req.body.id})
      res.send(projects)
  
}