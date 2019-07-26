import bodyParser from 'body-parser';
import logger from 'morgan';
import app from './app';
import routes from './routes/todo.routes';

app.express.use(bodyParser.json());
app.express.use(bodyParser.urlencoded({ extended: true })); // for parsing form data
app.express.use(logger('dev'));

app.connectDB('mongodb://localhost:27017/todolist');
app.mountRoutes(routes);
app.start(4000);
