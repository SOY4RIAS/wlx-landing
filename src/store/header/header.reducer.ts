import { headerActions, headerState, headerTypes } from './header.types';

const initialState: headerState = {
	isHeaderScrolled: false,
};

function headerReducer(state: headerState = initialState, action: headerActions) {
	switch (action.type) {
		case headerTypes.HEADER_SCROLLED:
			return {
				...state,
				isHeaderScrolled: action.payload,
			};

		default:
			return state;
	}
}

export default headerReducer;
