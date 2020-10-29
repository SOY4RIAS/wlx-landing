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

const List: React.FC = () => {
	const dispatch = useDispatch();

	const filterTechs = useMemo(() => orderAndFilterTechs, []);
	const loadingSelector = useMemo(() => isLoadingSelector, []);
	const likesSelector = useMemo(() => likesOnTechList, []);

	const visibleTechs = useSelector<RootState, TechWithLike[]>(filterTechs, () => false);

	const isLoading = useSelector<RootState, boolean>(loadingSelector);
	const likes = useSelector<RootState, Set<string>>(likesSelector);

	const onSaveLike = useCallback(
		({ target: { checked, dataset } }: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(saveLikeThunk(dataset.tech as string, checked));
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

			<section id={'tech-list'}>
				<div className="row head">
					<div>You like</div>
					<div>Tech</div>
					<div>Year</div>
					<div>Author</div>
					<div>License</div>
					<div>Language</div>
					<div>Type</div>
					<div>Logo</div>
				</div>

				{isLoading ? (
					<Loader />
				) : (
					visibleTechs.map((item, index) => (
						<div key={index} className={'row'}>
							<div>
								<input
									type="checkbox"
									data-tech={item.tech}
									onChange={onSaveLike}
									checked={likes.has(item.tech)}
								/>
							</div>
							<div>{item.tech}</div>
							<div>{item.year}</div>
							<div>{item.author}</div>
							<div>{item.license}</div>
							<div>{item.language}</div>
							<div>{item.type}</div>
							<div>
								<img src={item.logo} alt={item.tech} />
							</div>
						</div>
					))
				)}

				<div className="row head">
					<div>
						<h6 className="text-center">
							Quantity: <small>{visibleTechs.length}</small>
						</h6>
					</div>
				</div>
			</section>
		</main>
	);
};

export default List;
