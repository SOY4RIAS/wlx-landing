import { TechActions, TechState, TechTypes } from './tech.types';

const initialState: TechState = {
	isLoading: false,
	techs: [],
	techsResult: [],
};

function techReducer(state: TechState = initialState, action: TechActions): TechState {
	switch (action.type) {
		case TechTypes.TECH_LIST_REQUEST:
			return {
				...state,
				isLoading: true,
			};

		case TechTypes.TECH_LIST_REQUEST_SUCCESS:
			return {
				...state,
				techs: action.payload,
				techsResult: action.payload,
				isLoading: false,
			};

		case TechTypes.FILTER_TECH_BY_NAME:
			return {
				...state,
				nameFilter: action.payload,
			};

		case TechTypes.FILTER_TECH_BY_TYPE:
			return {
				...state,
				typeFilter: action.payload,
			};

		case TechTypes.TECH_LIST_REQUEST_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
}

export default techReducer;
