import React, { Suspense } from 'react';
import { Loading } from '../../components/Loading';

export const withSuspense = (Child: React.FC) => {
	const SuspenseWrapp = () => {
		return (
			<Suspense fallback={<Loading />}>
				<Child />
			</Suspense>
		);
	};

	return SuspenseWrapp;
};
