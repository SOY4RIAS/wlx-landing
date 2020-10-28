import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import headerReducer from './header/header.reducer';
import formReducer from './form/form.reducer';
import authReducer from './auth/auth.reducer';
import techReducer from './tech/tech.reducer';

const rootReducer = combineReducers({
	header: headerReducer,
	form: formReducer,
	auth: authReducer,
	tech: techReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
