import { applyMiddleware, createStore, Store } from 'redux';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Action, ActionType } from './actions';
import { rootEpic } from './epics';
import { reducer } from './reducer';
import { State } from './state';

function isOfType<A extends Action, T extends ActionType>(action: A, type: T): boolean {
	return action.type === type;
}

export function ofType<T extends ActionType, A extends Action & { type: T }>(type: T): (source: Observable<Action>) => Observable<A> {
	return function(source: Observable<Action>): Observable<A> {
		return source.pipe(
			filter(action => isOfType(action, type)),
			map(action => action as A)
		);
	};
}

export interface TypedAction<T extends ActionType> {
	type: T;
}

export interface TypedActionWithPayload<T extends ActionType, P> extends TypedAction<T> {
	payload: P;
}

export function createAction<T extends ActionType>(type: T): TypedAction<T>;
export function createAction<T extends ActionType, P>(type: T, payload: P): TypedActionWithPayload<T, P>;

export function createAction<T extends ActionType, P>(type: T, payload?: P): { type: T, payload?: P } {
	return {
		type,
		payload
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function groupEpics(...epics: ((source: Observable<any>) => Observable<any>)[]): Epic<any, any, void, any> {
	return combineEpics(...epics);
}

export function configureStore(): Store<State, Action> {
	const epicMiddleware = createEpicMiddleware();
	const store = createStore(reducer, applyMiddleware(epicMiddleware));

	epicMiddleware.run(rootEpic);

	return store;
}