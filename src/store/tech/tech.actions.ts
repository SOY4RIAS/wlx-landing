import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { GetList } from '../../api/Tech';
import { Tech, TechType } from '../../api/types';
import { RootState } from '../store';
import { LIKED_TECHS_KEY, OrderType, TechActions, TechTypes } from './tech.types';

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

export function orderTechByName(order?: string): TechActions {
	return {
		type: TechTypes.ORDER_TECH_BY_NAME,
		orderType: order as OrderType,
	};
}

export function filterByName(name?: string): TechActions {
	return {
		type: TechTypes.FILTER_TECH_BY_NAME,
		payload: name,
	};
}
export function filterByField(field?: string): TechActions {
	return {
		type: TechTypes.FILTER_TECH_BY_FIELD,
		field,
	};
}
export function filterByType(type?: string): TechActions {
	return {
		type: TechTypes.FILTER_TECH_BY_TYPE,
		payload: type as TechType | undefined,
	};
}

export function resetFilter(): TechActions {
	return {
		type: TechTypes.RESET_TECH_FILTER,
	};
}

export function loadLikes(): TechActions {
	return {
		type: TechTypes.LOAD_LIKES,
		likedTechs: getLikesOnTechList(),
	};
}

export function saveLike(likedTechs: Set<string>): TechActions {
	return {
		type: TechTypes.SAVE_LIKE_ON_TECH,
		likedTechs,
	};
}

export function saveLikeThunk(
	tech: string,
	checked: boolean
): ThunkAction<Promise<void>, RootState, unknown, TechActions> {
	return async function (dispatch: ThunkDispatch<{}, {}, TechActions>) {
		const likes = getLikesOnTechList();

		if (!checked) {
			likes.delete(tech);
		} else {
			likes.add(tech);
		}

		saveLikesOnStorage(likes);
		dispatch(saveLike(likes));
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

/**
 * `getLikesOnTechList` is a function that reads the localStorage and returns
 * a `Set` of likes on Tech List
 */
function getLikesOnTechList(): Set<string> {
	const savedLikedTechs = localStorage.getItem(LIKED_TECHS_KEY);

	const likedTechs = !savedLikedTechs ? [] : (JSON.parse(savedLikedTechs) as string[]);

	return new Set(likedTechs);
}

/**
 * `saveLikesOnStorage` is a function that saves on localStorage a
 * `Set` of likes on Tech List
 */
function saveLikesOnStorage(likes: Set<string>) {
	const savedLikedTechs = JSON.stringify(Array.from(likes));
	localStorage.setItem(LIKED_TECHS_KEY, savedLikedTechs);
}
