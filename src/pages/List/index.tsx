import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tech } from '../../api/types';
import { RootState } from '../../store/store';
import { Loader } from '../../components/Loader';
import { techListThunk } from '../../store/tech/tech.actions';
import { isLoadingSelector, orderAndFilterTechs } from '../../store/tech/tech.selectors';

import './list.scss';

import { FilterSection } from './sections/FilterSection';

const List: React.FC = () => {
	const dispatch = useDispatch();

	const filterTechs = useMemo(() => orderAndFilterTechs, []);

	const visibleTechs = useSelector<RootState, Tech[]>(filterTechs, () => false);

	const isLoading = useSelector<RootState, boolean>(isLoadingSelector);

	useEffect(() => {
		dispatch(techListThunk());
	}, [dispatch]);

	return (
		<main id="list-main">
			<h1 className="text-center">List</h1>

			<FilterSection dispatch={dispatch} />

			<section id={'tech-list'}>
				<div className="row head">
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
