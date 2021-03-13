export enum ActionType {
	UPDATE_DATE = 'UPDATE_DATE'
}

export interface UpdateDate {
	type: ActionType.UPDATE_DATE;
	date: Date;
}

export type Action = UpdateDate;