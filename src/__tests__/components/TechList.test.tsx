import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { TechList } from '../../components/TechList';

describe('<TechList />', () => {
	test('should render loading component', async () => {
		render(
			<TechList
				loading={true}
				loadingComponent={<h1 data-testid={'loading-component'}>Loading</h1>}
			/>
		);

		expect((await screen.findByTestId('loading-component')).innerHTML).toBe('Loading');

		cleanup();
	});

	test('should render the items list', async () => {});
});
