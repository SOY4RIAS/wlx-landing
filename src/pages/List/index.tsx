import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { Loader } from '../../components/Loader';
import { saveLikeThunk, techListThunk } from '../../store/tech/tech.actions';
import {
	isLoadingSelector,
	likesOnTechList,
	orderAndFilterTechs,
} from '../../store/tech/tech.selectors';

import './list.scss';

import { FilterSection } from './sections/FilterSection';
import { TechWithLike } from '../../store/tech/tech.types';
import { TechList } from '../../components/TechList';

const List: React.FC = () => {
	const dispatch = useDispatch();

	const filterTechs = useMemo(() => orderAndFilterTechs, []);
	const loadingSelector = useMemo(() => isLoadingSelector, []);
	const likesSelector = useMemo(() => likesOnTechList, []);

	const visibleTechs = useSelector<RootState, TechWithLike[]>(filterTechs, () => false);

	const isLoading = useSelector<RootState, boolean>(loadingSelector);
	const likes = useSelector<RootState, Set<string>>(likesSelector);

	const onSaveLike = useCallback(
		(tech: string, checked) => {
			dispatch(saveLikeThunk(tech, checked));
		},
		[dispatch]
	);

	useEffect(() => {
		dispatch(techListThunk());
	}, [dispatch]);

	return (
		<main id="list-main">
			<h1 className="text-center">List</h1>

			<FilterSection dispatch={dispatch} />

			<TechList
				loading={isLoading}
				loadingComponent={<Loader />}
				items={visibleTechs}
				onCheckedItem={onSaveLike}
				setToChecked={likes}
			/>
		</main>
	);
};

export default List;
