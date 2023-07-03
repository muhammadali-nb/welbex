export type Address = {
	title: string;
	lat: number;
	lng: number;
};

export type User = {
	category: string;
	name: string;
	phone: string;
	id: number;
	car_id: string;
	address: Address;
};