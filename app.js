
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import expressValidator from 'express-validator';

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(router);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});