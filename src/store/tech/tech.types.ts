import { Tech, TechType } from '../../api/types';

export interface TechState {
	isLoading: boolean;
	techsResult: Tech[];
	techs: Tech[];

	error?: string;

	nameFilter?: string;
	typeFilter?: TechType;
}

export enum TechTypes {
	TECH_LIST_REQUEST = 'TECH_LIST_REQUEST',
	TECH_LIST_REQUEST_SUCCESS = 'TECH_LIST_REQUEST_SUCCESS',
	TECH_LIST_REQUEST_FAILURE = 'TECH_LIST_REQUEST_FAILURE',

	RESET_TECH_FILTER = 'RESET_TECH_FILTER',

	FILTER_TECH_BY_NAME = 'FILTER_TECH_BY_NAME',
	FILTER_TECH_BY_TYPE = 'FILTER_TECH_BY_TYPE',

	ORDER_TECH_BY_NAME = 'ORDER_TECH_BY_NAME',
}

export type TechActions =
	| { type: TechTypes.TECH_LIST_REQUEST }
	| { type: TechTypes.TECH_LIST_REQUEST_SUCCESS; payload: Tech[] }
	| { type: TechTypes.TECH_LIST_REQUEST_FAILURE; payload: string }
	| { type: TechTypes.RESET_TECH_FILTER }
	| { type: TechTypes.FILTER_TECH_BY_NAME; payload?: string }
	| { type: TechTypes.FILTER_TECH_BY_TYPE; payload?: TechType }
	| { type: TechTypes.ORDER_TECH_BY_NAME; orderType: OrderType };

export type OrderType = 'asc' | 'desc';

export interface Filter {
	name?: string;
	type?: TechType;
}
