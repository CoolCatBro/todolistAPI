import Todo, { ICreateTodo, ITodo } from '../models/todo.model';


interface ITodoSwitch {
    completed: ICreateTodo['completed'];
}

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

async function SwitchTodo(id: string, todoSwitch: ITodoSwitch): Promise<ITodo> {
    return Todo.findByIdAndUpdate(id, todoSwitch)
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
