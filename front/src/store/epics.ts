import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action, Actions, ActionType } from './actions';
import { groupEpics, ofType } from './store';

function updateDateEpic(actions$: Observable<Action>) {
	return actions$.pipe(
		ofType(ActionType.UPDATE_DATE),
		map(action => Actions.updateNote(action.payload.toLocaleDateString('fr-FR')))
	);
}

export const rootEpic = groupEpics(updateDateEpic);