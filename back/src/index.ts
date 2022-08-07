import express from 'express';
import { router } from './router';

const app = express();
const port = 8080;

app.use('/api/notes/', router);

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`);
});