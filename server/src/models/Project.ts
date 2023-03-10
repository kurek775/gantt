import mongoose from 'mongoose'

const Schema = mongoose.Schema;
 // const ObjectId = Schema.Types.ObjectId;

const ProjectSchema = new Schema({
   name: String,
   tasks: Array,
   owner: String
   
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;