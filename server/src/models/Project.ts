import mongoose from 'mongoose'

const Schema = mongoose.Schema;
 // const ObjectId = Schema.Types.ObjectId;

const ProjectSchema = new Schema({
   name: String,
   tasks: Array
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;