import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { GetList } from '../../api/Tech';
import { Tech, TechType } from '../../api/types';
import { RootState } from '../store';
import { OrderType, TechActions, TechTypes } from './tech.types';

export function techListRequest(): TechActions {
	return {
		type: TechTypes.TECH_LIST_REQUEST,
	};
}

export function techListRequestSuccess(techs: Tech[]): TechActions {
	return {
		type: TechTypes.TECH_LIST_REQUEST_SUCCESS,
		payload: techs,
	};
}

export function techListRequestFailure(error: string): TechActions {
	return {
		type: TechTypes.TECH_LIST_REQUEST_FAILURE,
		payload: error,
	};
}

export function orderTechByName(order: OrderType): TechActions {
	return {
		type: TechTypes.ORDER_TECH_BY_NAME,
		orderType: order,
	};
}

export function filterByName(name?: string): TechActions {
	return {
		type: TechTypes.FILTER_TECH_BY_NAME,
		payload: name,
	};
}
export function filterByType(type?: string): TechActions {
	return {
		type: TechTypes.FILTER_TECH_BY_TYPE,
		payload: type as TechType | undefined,
	};
}

export function techListThunk(): ThunkAction<Promise<void>, RootState, unknown, TechActions> {
	return async function (dispatch: ThunkDispatch<{}, {}, TechActions>) {
		dispatch(techListRequest());

		const techs = await GetList();

		if (!techs) {
			dispatch(techListRequestFailure('Error at fetching'));
			return;
		}

		dispatch(techListRequestSuccess(techs));
	};
}
