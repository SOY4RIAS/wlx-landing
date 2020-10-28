export interface User {
	name: string;
	last_name: string;
	country: string;
	province: string;
	mail: string;
	phone: string;
	password: string;
}

export interface Credentials {
	email: string;
	password: string;
}

export interface AuthResponse {
	token: string | null;
	error?: any;
}

export type TechsResponse = Tech[];

export type TechType = 'Back-End' | 'Front-End' | 'Mobile';

export interface Tech {
	tech: string;
	year: string;
	author: string;
	license: string;
	language: string;
	type: TechType;
	logo: string;
}
