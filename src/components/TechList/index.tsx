import React, { useCallback } from 'react';
import { Tech } from '../../api/types';
import { TechRow } from './TechRow';

import styles from './tech_list.module.scss';

interface TechListProps {
	loading: boolean;
	loadingComponent: React.ReactNode;
	items?: Tech[];
	setToChecked?: Set<string>;
	onCheckedItem?: (tech: string, checked: boolean) => void;
}

const RowHeadCls = `${styles.row} ${styles.head}`;

export const TechList: React.FC<TechListProps> = ({
	loading,
	loadingComponent,
	items = [],
	setToChecked = new Set(),
	onCheckedItem = () => null,
}) => {
	const handleChange = useCallback(
		({ target: { checked, dataset } }: React.ChangeEvent<HTMLInputElement>) => {
			onCheckedItem(dataset.tech as string, checked);
		},
		[onCheckedItem]
	);

	return (
		<>
			<section className={styles.tech_list}>
				<div className={RowHeadCls}>
					<div>You like</div>
					<div>Tech</div>
					<div>Year</div>
					<div>Author</div>
					<div>License</div>
					<div>Language</div>
					<div>Type</div>
					<div>Logo</div>
				</div>

				{loading
					? loadingComponent
					: items.map((item, index) => {
							return (
								<TechRow
									className={styles.row}
									key={index}
									item={item}
									checked={setToChecked.has(item.tech)}
									onChange={handleChange}
								/>
							);
					  })}

				<div className={RowHeadCls}>
					<div>
						<small>Quantity: {items.length}</small>
					</div>
				</div>
			</section>
		</>
	);
};
