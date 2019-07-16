import express, { Application, Router } from 'express';
import connect from './mongoDB/connect';
import errorHandler from './routes/errorHandler';

class App {

    public express: Application;
    public router: Router;

    constructor() {
        this.express = express();
        this.router = express.Router();
    }

    public connectDB(dbHost: string): void {
        connect(dbHost);
    }

    public mountRoutes(routes: (router: Router) => void): void {
        routes(this.router);
    }

    public start(port: string | number) {

        this.express.use('/api', this.router);
        errorHandler(this.express);

        port = process.env.PORT || port;
        this.express.listen(port , () => {
            return console.log(`Server is listening on port ${port}`);
        });
    }
}

export default new App();
