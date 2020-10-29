import { HeaderActions, HeaderState, HeaderTypes } from './header.types';

const initialState: HeaderState = {
	isHeaderScrolled: false,
};

function headerReducer(state: HeaderState = initialState, action: HeaderActions) {
	switch (action.type) {
		case HeaderTypes.HEADER_SCROLLED:
			return {
				...state,
				isHeaderScrolled: action.payload,
			};

		default:
			return state;
	}
}

export default headerReducer;
