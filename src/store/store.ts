import { applyMiddleware, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Action, ActionType } from './actions';
import { rootEpic } from './epics';
import { reducer } from './reducer';

function isOfType<A extends Action, T extends ActionType>(action: A, type: T): boolean {
	return action.type === type;
}

export function ofType<T extends ActionType, A extends Action & { type: T }>(type: T): (source: Observable<Action>) => Observable<A> {
	return function(source: Observable<Action>): Observable<A> {
		return source.pipe(
			filter(action => isOfType(action, type)),
			map(action => action as A)
		);
	}
}

export function createAction<T extends ActionType>(type: T): { type: T };
export function createAction<T extends ActionType, P>(type: T, payload: P): { type: T, payload: P };

export function createAction<T extends ActionType, P>(type: T, payload?: P): { type: T, payload?: P } {
	return {
		type,
		payload
	}
}

export function groupEpics(...epics: ((source: Observable<any>) => Observable<any>)[]) {
	return combineEpics(...epics);
}

export function configureStore() {
	const epicMiddleware = createEpicMiddleware();
	const store = createStore(reducer, applyMiddleware(epicMiddleware));

	epicMiddleware.run(rootEpic);

	return store;
}