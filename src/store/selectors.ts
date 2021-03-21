import { State } from './state';

export const selectDate = (state: State) => state.date;
export const selectNote = (state: State) => state.note;