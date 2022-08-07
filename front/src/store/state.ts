export interface State {
	date: Date;
	note: string;
}

export const initialState: State = {
	date: new Date(),
	note: ''
};