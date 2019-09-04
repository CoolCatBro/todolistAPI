import mongoose, {Document, Schema} from 'mongoose';

const TodoSchema: Schema = new Schema({
    todo: {type: String, required: true},
    completed: {type: Boolean, required: true},
});

export interface ICreateTodo {
    todo: string;
    completed: boolean;
}

export interface ITodo extends Document, ICreateTodo {
}

export default mongoose.model<ITodo>('Todo', TodoSchema);
