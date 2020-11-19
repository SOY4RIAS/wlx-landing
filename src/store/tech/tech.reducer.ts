import { TechActions, TechState, TechTypes } from './tech.types';

const initialState: TechState = {
	isLoading: false,
	techs: [],
	techsResult: [],
	likedTechs: new Set(),
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

		case TechTypes.TECH_LIST_REQUEST_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
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
		case TechTypes.FILTER_TECH_BY_FIELD:
			return {
				...state,
				fieldFilter: action.field,
			};

		case TechTypes.RESET_TECH_FILTER:
			delete state.typeFilter;
			delete state.nameFilter;
			delete state.orderBy;

			return {
				...state,
			};

		case TechTypes.LOAD_LIKES:
		case TechTypes.SAVE_LIKE_ON_TECH:
			return {
				...state,
				likedTechs: action.likedTechs,
			};

		case TechTypes.ORDER_TECH_BY_NAME:
			return {
				...state,
				orderBy: action.orderType,
			};

		default:
			return state;
	}
}

export default techReducer;
