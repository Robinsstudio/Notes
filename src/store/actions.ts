import { createAction } from './store';

export enum ActionType {
	UPDATE_DATE = 'UPDATE_DATE',
	UPDATE_NOTE = 'UPDATE_NOTE'
}

function updateDate(date: Date): { type: ActionType.UPDATE_DATE, payload: Date } {
	return createAction(ActionType.UPDATE_DATE, date);
}

function updateNote(note: string): { type: ActionType.UPDATE_NOTE, payload: string } {
	return createAction(ActionType.UPDATE_NOTE, note);
}

export const Actions = {
	updateDate,
	updateNote
};

export type Action = ReturnType<typeof updateDate | typeof updateNote>;