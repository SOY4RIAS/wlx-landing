export const API_URL = process.env.REACT_APP_API;

export const WOLOX_TWITTER_URL = 'https://twitter.com/wolox';
export const WOLOX_PAGE = 'https://wolox.com.ar';

export const SPANISH_CODE = 'es';
export const ENGLISH_CODE = 'en';
export const AVAILABLE_LANGS_TEXT = {
	[SPANISH_CODE]: 'Español',
	[ENGLISH_CODE]: 'English',
};

/// Countries data structure

export interface BasicRecord {
	id: string;
	name: string;
}

export const COLOMBIA_CODE: string = 'co';
export const ARGENTINA_CODE: string = 'ar';
export const MEXICO_CODE: string = 'mx';
export const CHILE_CODE: string = 'cl';
export const PERU_CODE: string = 'pe';

export const COUNTRIES: BasicRecord[] = [
	{ id: COLOMBIA_CODE, name: 'Colombia' },
	{ id: ARGENTINA_CODE, name: 'Argentina' },
	{ id: MEXICO_CODE, name: 'México' },
	{ id: CHILE_CODE, name: 'Chile' },
	{ id: PERU_CODE, name: 'Perú' },
];

/// Provinces data structure

interface Provinces {
	[key: string]: BasicRecord[];
}

export const PROVINCES: Provinces = {
	[COLOMBIA_CODE]: [
		{ id: 'bol', name: 'Bolívar' },
		{ id: 'boy', name: 'Boyacá' },
		{ id: 'cal', name: 'Caldas' },
		{ id: 'cau', name: 'Cauca' },
		{ id: 'mag', name: 'Magdalena' },
	],
	[ARGENTINA_CODE]: [
		{ id: 'bua', name: 'Buenos Aires' },
		{ id: 'cor', name: 'Córdoba' },
		{ id: 'saf', name: 'Santa Fe' },
		{ id: 'men', name: 'Mendoza' },
		{ id: 'cha', name: 'Chaco' },
	],
	[MEXICO_CODE]: [
		{ id: 'lac', name: 'Las Californias' },
		{ id: 'mex', name: 'México' },
		{ id: 'nmx', name: 'Nuevo México' },
		{ id: 'tex', name: 'Texas' },
		{ id: 'nuv', name: 'Nueva Vizcaya' },
	],
	[CHILE_CODE]: [
		{ id: 'pet', name: 'Petorca' },
		{ id: 'loa', name: 'Los Andes' },
		{ id: 'fea', name: 'San Felipe de Aconcagua' },
		{ id: 'qui', name: 'Quillota' },
		{ id: 'val', name: 'Valparaíso' },
	],
	[PERU_CODE]: [
		{ id: 'anc', name: 'Ancash' },
		{ id: 'apu', name: 'Apurímac' },
		{ id: 'are', name: 'Arequipa' },
		{ id: 'aya', name: 'Ayacucho' },
		{ id: 'cus', name: 'Cusco' },
	],
};
