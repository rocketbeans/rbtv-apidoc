import { Image } from "../../shared/";


export interface simpleShopItem {
	id: number;
	name: string;
	description: string;
	price: string;
	vat: string;
	link: string;
	image: Array<Image> | string;	// Type string is management only
	sortPrio?: number; // only used in admin
	ciVisible?: boolean; // only used in admin
	ciDescription?: string; // only used in admin
	pageVisible?: boolean;	// only used in admin
};

