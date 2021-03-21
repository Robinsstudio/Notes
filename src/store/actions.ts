import { createAction } from './store';

export enum ActionType {
	UPDATE_DATE = 'UPDATE_DATE',
	UPDATE_NOTE = 'UPDATE_NOTE'
}

export const Actions = {
	updateDate: (date: Date) => {
		return createAction(ActionType.UPDATE_DATE, date);
	},
	updateNote: (note: string) => {
		return createAction(ActionType.UPDATE_NOTE, note);
	}
};

export type Action = ReturnType<typeof Actions.updateDate | typeof Actions.updateNote>;