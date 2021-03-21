import { Action, ActionType } from './actions';
import { State, initialState } from './state';

export function reducer(state: State = initialState, action: Action): State {
	switch (action.type) {
		case ActionType.UPDATE_DATE:
			return {
				...state,
				date: action.payload
			};
		case ActionType.UPDATE_NOTE:
			return {
				...state,
				note: action.payload
			};
		default:
			return state;
	}
}