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

    router.post('/todo/:id', async (req: Request, res: Response) => {
        const state: boolean = req.query.value;
        const id = req.params.Id;

        const todo = await TodoController.SwitchTodo(id, {
            completed: state,
        });

        res.send(todo);
    });
};

