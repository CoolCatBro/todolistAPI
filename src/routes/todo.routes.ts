import {Request, Response, Router} from 'express';
import TodoController from '../controllers/todo.controller';

export default (router: Router) => {

    router.get('/todo', async (req: Request, res: Response) => {
        const todo = await TodoController.ReadTodos({});

        return res.send(todo);
    });

    router.post('/todo', async (req: Request, res: Response) => {
        const todo = await TodoController.CreateTodo({
            todo: req.body.todo,
            completed: false,
        });

        return res.send(todo);
    });

    router.put('/todo/:id', async (req: Request, res: Response) => {
        const id: string = req.params.id;
        const state: boolean = (req.query.state === 'true');

        const todo = await TodoController.SwitchTodo(id, state);

        res.send(todo);
    });

    router.delete('/todo/:id', async (req: Request, res: Response) => {
        const id: string = req.params.id;

        const todo = await TodoController.DeleteTodo(id);

        res.send(todo);
    });
};

