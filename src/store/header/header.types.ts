export interface headerState {
	isHeaderScrolled: boolean;
}

export enum headerTypes {
	HEADER_SCROLLED = 'HEADER_SCROLLED',
}

export type headerActions = { type: headerTypes.HEADER_SCROLLED; payload: boolean };
