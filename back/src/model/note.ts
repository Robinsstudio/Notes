import { connect, Schema, model } from 'mongoose';

connect('mongodb://localhost:27017/notes');

export interface NoteDocument {
	creationDate: Date;
	lastModifiedDate: Date;
	text: string;
}

export const Note = model<NoteDocument>('Note', new Schema<NoteDocument>({
	creationDate: { type: Date, required: true },
	lastModifiedDate: { type: Date, required: true },
	text: { type: String, required: true }
}));
