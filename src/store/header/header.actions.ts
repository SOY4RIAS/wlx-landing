import { HeaderActions, HeaderTypes } from './header.types';

export function headerScrolled(isScrolled: boolean): HeaderActions {
	return {
		type: HeaderTypes.HEADER_SCROLLED,
		payload: isScrolled,
	};
}
