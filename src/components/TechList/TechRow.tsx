import React from 'react';
import { Tech } from '../../api/types';

interface TechRowProps {
	className: string;
	item: Tech;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
}

export const TechRow: React.FC<TechRowProps> = ({ className, item, onChange, checked }) => {
	return (
		<div className={className} role="row">
			<div>
				<input type="checkbox" data-tech={item.tech} onChange={onChange} checked={checked} />
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
	);
};
