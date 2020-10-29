import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { TechList } from '../../components/TechList';
import { TechsMock, SetOfLikesMock } from '../../__mocks__/techs.mock';

describe('<TechList />', () => {
	test('should render loading component', async () => {
		render(
			<TechList
				loading
				setToChecked={SetOfLikesMock}
				onCheckedItem={jest.fn()}
				loadingComponent={<h1 data-testid={'loading-component'}>Loading</h1>}
			/>
		);

		expect((await screen.findByTestId('loading-component')).innerHTML).toBe('Loading');

		cleanup();
	});

	test('should render the items list', async () => {
		render(<TechList items={TechsMock} setToChecked={SetOfLikesMock} onCheckedItem={jest.fn()} />);

		expect((await screen.findAllByRole('row')).length).toBe(TechsMock.length);
		cleanup();
	});

	test('should checked the items that has been liked', () => {
		const { container } = render(
			<TechList items={TechsMock} setToChecked={SetOfLikesMock} onCheckedItem={jest.fn()} />
		);

		expect(container.querySelectorAll('input[type="checkbox"]:checked').length).toBe(
			SetOfLikesMock.size
		);

		cleanup();
	});

	test('should trigger the onChangeEvent on checked an item', async () => {
		const OnChange = jest.fn();

		const { container } = render(
			<TechList items={TechsMock} setToChecked={SetOfLikesMock} onCheckedItem={OnChange} />
		);

		const element = container.querySelector('input[type="checkbox"]');

		if (!element) {
			throw new Error('INPUT:checkbox NOT FOUND');
		}

		fireEvent.click(element);

		expect(OnChange).toBeCalledTimes(1);
		cleanup();
	});
});
