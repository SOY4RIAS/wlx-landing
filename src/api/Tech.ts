import { API_URL } from './../utils/constants';

import { TechsResponse } from './types';

export const GetList = async (): Promise<TechsResponse | null> => {
	try {
		const response = await fetch(`${API_URL}/techs`);

		return await response.json();
	} catch (error) {
		return null;
	}
};
