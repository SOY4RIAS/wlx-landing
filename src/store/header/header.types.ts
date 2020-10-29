export interface HeaderState {
	isHeaderScrolled: boolean;
}

export enum HeaderTypes {
	HEADER_SCROLLED = 'HEADER_SCROLLED',
}

export type HeaderActions = { type: HeaderTypes.HEADER_SCROLLED; payload: boolean };
