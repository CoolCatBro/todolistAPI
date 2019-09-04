import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from 'morgan';
import app from './app';
import routes from './routes/todo.routes';

dotenv.config();
const {ENV, DB_CONN, DB_USER, DB_PASS} = process.env;

app.express.use(bodyParser.json());
app.express.use(bodyParser.urlencoded({ extended: true })); // for parsing form data

if ( ENV !== 'Production') {
    app.express.use(logger('dev'));
}

app.connectDB(DB_CONN, DB_USER, DB_PASS);
app.mountRoutes(routes);
app.start(4000);
