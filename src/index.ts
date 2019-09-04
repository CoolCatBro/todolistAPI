import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from 'morgan';
import app from './app';
import routes from './routes/todo.routes';

dotenv.config();

app.express.use(bodyParser.json());
app.express.use(bodyParser.urlencoded({ extended: true })); // for parsing form data
app.express.use(logger('dev'));

app.connectDB(process.env.DB_CONN);
app.mountRoutes(routes);
app.start(4000);
