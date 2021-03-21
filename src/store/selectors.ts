import { State } from './state';

export const selectDate = (state: State): Date => state.date;
export const selectNote = (state: State): string => state.note;