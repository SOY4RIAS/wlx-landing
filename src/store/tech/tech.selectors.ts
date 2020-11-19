import { createSelector } from 'reselect';
import { RootState } from '../store';
import { TechWithLike } from './tech.types';

export const techsSelector = (state: RootState) => state.tech.techs as TechWithLike[];

export const isLoadingSelector = (state: RootState) => state.tech.isLoading;

export const likesOnTechList = (state: RootState) => state.tech.likedTechs;
export const countOfLikes = (state: RootState) => state.tech.likedTechs.size;

export const nameFilterSelector = (state: RootState) => state.tech.nameFilter;
export const fieldNameFilterSelector = (state: RootState) => state.tech.fieldFilter;

export const typeFilterSelector = (state: RootState) => state.tech.typeFilter;

export const orderBySelector = (state: RootState) => state.tech.orderBy;

export const filteredTechs = createSelector(
	[techsSelector, nameFilterSelector, typeFilterSelector, fieldNameFilterSelector],
	(techs, nameFilter, typeFilter, fieldFilter) => {
		return techs.filter((item: any) => {
			const searchField = !fieldFilter ? 'tech' : fieldFilter;

			if (nameFilter && typeFilter) {
				return item[searchField].startsWith(nameFilter) && item.type === typeFilter;
			}

			if (nameFilter) {
				return item[searchField].startsWith(nameFilter);
			}

			if (typeFilter) {
				return item.type === typeFilter;
			}

			return true;
		});
	}
);

export const orderAndFilterTechs = createSelector(
	[filteredTechs, orderBySelector],
	(techs, orderBy) => {
		if (!orderBy) return techs;

		return techs.sort((curr, next) => {
			if (orderBy === 'asc') {
				return curr.tech.localeCompare(next.tech);
			}

			return next.tech.localeCompare(curr.tech);
		});
	}
);
