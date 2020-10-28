import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tech } from '../../api/types';
import { Loader } from '../../components/Loader';
import { RootState } from '../../store/store';
import { techListThunk } from '../../store/tech/tech.actions';

import './list.scss';
import { FilterSection } from './sections/FilterSection';

interface ListSelector {
	techAmount: number;
	isLoading: boolean;
}

const List: React.FC = () => {
	const dispatch = useDispatch();

	const visibleTechs = useSelector<RootState, Tech[]>(({ tech }) =>
		tech.techs.filter((item) => {
			if (tech.nameFilter && tech.typeFilter) {
				return item.tech.startsWith(tech.nameFilter) && item.type === tech.typeFilter;
			}

			if (tech.nameFilter) {
				return item.tech.startsWith(tech.nameFilter);
			}

			if (tech.typeFilter) {
				return item.type === tech.typeFilter;
			}

			return true;
		})
	);

	const { isLoading, techAmount } = useSelector<RootState, ListSelector>(({ tech }) => ({
		isLoading: tech.isLoading,
		techAmount: tech.techs.length,
	}));

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
							Quantity: <small>{techAmount}</small>
						</h6>
					</div>
				</div>
			</section>
		</main>
	);
};

export default List;
