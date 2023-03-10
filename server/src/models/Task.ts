import mongoose from 'mongoose'

const Schema = mongoose.Schema;
 // const ObjectId = Schema.Types.ObjectId;

const TaskSchema = new Schema({
   name: String,
   tote: String,
   periods: Array
});

const TaskModel = mongoose.model('Task', TaskSchema);

export default TaskModel;