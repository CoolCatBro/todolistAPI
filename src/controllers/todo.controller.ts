import Todo, { ICreateTodo, ITodo } from '../models/todo.model';


async function CreateTodo(newTodo: ICreateTodo): Promise<ITodo> {
    return Todo.create(newTodo)
        .then((data: ITodo) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function ReadTodos(readTodo: ICreateTodo | any): Promise<ITodo[]> {
    return Todo.find(readTodo)
        .then((data: ITodo[]) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function SwitchTodo(id: string, state: boolean): Promise<ITodo> {
    return Todo.findByIdAndUpdate(id, {
            completed: state,
            })
           .then((data: ITodo) => {
               return data;
           })
           .catch((error: Error) => {
               throw error;
           });
}

async function DeleteTodo(id: string): Promise<ITodo> {
    return Todo.findByIdAndDelete(id)
           .then((data: ITodo) => {
               return data;
           })
           .catch((error: Error) => {
               throw error;
           });
}

export default {
    CreateTodo,
    ReadTodos,
    SwitchTodo,
    DeleteTodo,
};
