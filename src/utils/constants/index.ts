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
export const COUNTRIES = [
	{
		id: COLOMBIA_CODE,
		name: 'Colombia',
	},
	{
		id: ARGENTINA_CODE,
		name: 'Argentina',
	},
];

export const PROVINCES = {
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
};
