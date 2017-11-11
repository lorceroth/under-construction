import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

const projectDir = path.dirname(__dirname);

const app = express();

app.set('views', path.join(projectDir, 'views'));
app.set('view engine', 'pug');

app.set('port', process.env.port || 3000);

app.use(logger('dev'));
app.use(express.static(path.join(projectDir, 'public')));

app.get('/', (request, response) => {
  response.render('index');
});

app.listen(app.get('port'), () => {
  console.log(`Serving on: http://localhost:${app.get('port')}`);
});
