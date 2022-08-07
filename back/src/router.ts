import express from 'express';
import bodyParser from 'body-parser';
import { Note } from './model/note';

export const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req, res) => {
	const now = Date.now();

	await new Note({
		creationDate: now,
		lastModifiedDate: now,
		text: req.body.text
	}).save();

	res.sendStatus(201);
});

router.get('/', (_, res) => {
	Note.find().lean().exec((__, notes) => res.json(notes));
});