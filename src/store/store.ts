import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import headerReducer from './header/header.reducer';
import formReducer from './form/form.reducer';

const rootReducer = combineReducers({
	header: headerReducer,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
