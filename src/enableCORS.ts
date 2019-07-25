import {Application, NextFunction, Request, Response} from 'express';


export default (express: Application) => {

    express.use((req: Request , res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE');
            return res.status(200).json({});
        }
        next();
    });
};

