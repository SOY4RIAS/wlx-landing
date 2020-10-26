export const WOLOX_TWITTER_URL = 'https://twitter.com/wolox';
export const WOLOX_PAGE = 'https://wolox.com.ar';

export const SPANISH_CODE = 'es';
export const ENGLISH_CODE = 'en';
export const AVAILABLE_LANGS_TEXT = {
	[SPANISH_CODE]: 'Español',
	[ENGLISH_CODE]: 'English',
};

export const COLOMBIA_CODE = 'co';
export const ARGENTINA_CODE = 'ar';
export const MEXICO_CODE = 'mx';
export const CHILE_CODE = 'cl';
export const PERU_CODE = 'pe';

type COUNTRIES = typeof COLOMBIA_CODE | typeof ARGENTINA_CODE;

export const COUNTRIES = [
	{ id: COLOMBIA_CODE, name: 'Colombia' },
	{ id: ARGENTINA_CODE, name: 'Argentina' },
	{ id: MEXICO_CODE, name: 'México' },
	{ id: CHILE_CODE, name: 'Chile' },
	{ id: PERU_CODE, name: 'Perú' },
];

export interface Province {
	id: string;
	name: string;
}

export const PROVINCES: any = {
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

export const API_URL = process.env.REACT_APP_API;
