import { formActions, formTypes } from './form.types';

export function changeProvince(province: string): formActions {
	return {
		type: formTypes.CHANGE_PROVINCE,
		payload: province,
	};
}
