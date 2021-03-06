import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import {
	filterByField,
	filterByName,
	filterByType,
	orderTechByName,
	resetFilter,
} from '../../../store/tech/tech.actions';

import { TECH_FILTERS } from './../../../utils/constants';

interface FilterSectionProps {
	dispatch: Dispatch;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ dispatch }) => {
	const onChangeName = (name: string) => {
		dispatch(filterByName(name.length > 0 ? name : undefined));
	};

	const onChangeField = (field: string) => {
		dispatch(filterByField(field.length > 0 ? field : undefined));
	};

	const onChangeType = (type: string) => {
		dispatch(filterByType(type.length > 0 ? type : undefined));
	};

	const onChangeOrder = (order: string) => {
		dispatch(orderTechByName(order.length > 0 ? order : undefined));
	};

	useEffect(
		() => () => {
			dispatch(resetFilter());
		},
		[dispatch]
	);

	return (
		<>
			<section id="filter-section">
				<h5>Filter By</h5>

				<div>
					<input placeholder="Tech name" onChange={(e) => onChangeName(e.target.value)} />

					<select onChange={(e) => onChangeField(e.target.value)}>
						<option value="">Any Field</option>
						{TECH_FILTERS.map((field) => (
							<option value={field} key={field}>
								{field}
							</option>
						))}
					</select>

					<select onChange={(e) => onChangeType(e.target.value)}>
						<option value="">Every Type</option>
						<option value="Back-End">Back-End</option>
						<option value="Front-End">Front-End</option>
						<option value="Mobile">Mobile</option>
					</select>

					<select onChange={(e) => onChangeOrder(e.target.value)}>
						<option value="">Order By</option>
						<option value="asc">ASC</option>
						<option value="desc">DESC</option>
					</select>
				</div>
			</section>
		</>
	);
};
