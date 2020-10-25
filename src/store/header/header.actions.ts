import { headerActions, headerTypes } from './header.types';

export function headerScrolled(isScrolled: boolean): headerActions {
	return {
		type: headerTypes.HEADER_SCROLLED,
		payload: isScrolled,
	};
}
