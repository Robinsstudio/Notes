import { createAction, TypedActionWithPayload } from './store';

export enum ActionType {
	UPDATE_DATE = 'UPDATE_DATE',
	UPDATE_NOTE = 'UPDATE_NOTE'
}

function updateDate(date: Date): TypedActionWithPayload<ActionType.UPDATE_DATE, Date> {
	return createAction(ActionType.UPDATE_DATE, date);
}

function updateNote(note: string): TypedActionWithPayload<ActionType.UPDATE_NOTE, string> {
	return createAction(ActionType.UPDATE_NOTE, note);
}

export const Actions = {
	updateDate,
	updateNote
};

export type Action = ReturnType<typeof updateDate | typeof updateNote>;