export interface formState {
	currentProvince: string;
}

export enum formTypes {
	CHANGE_PROVINCE = 'CHANGE_PROVINCE',
}

export type formActions = { type: formTypes.CHANGE_PROVINCE; payload: string };
