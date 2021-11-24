import { Image, link } from "../../shared";
import { bohnePortrait } from "../../shared";
import { IRaffleTeaser } from "../../shared";

export namespace ApiUrl {
	export const BlogAll = "/v1/blog/all";
	export const BlogAllV1 = "/v1/blog/all";
}


// Category Support:
export interface blogCategory {
	id: string;
	visibleName: string;
	color: string;
};


// Used In Admin (Full Response)
export interface blogResponse {
	id: number;
	title: string;
	subtitle: string;
	contentMK?: string;
	contentHTML?: string;

	isDisabled: boolean;
	publishDate: Date;
	createDate: Date;
	lastChangeDate: Date;
	authors: bohnePortrait[] | number[];
	titleImage: Array<Image> | string;	// Type string is management only
	thumbImage: Array<Image> | string;	// Type string is management only
	links: Array<link>;

	// Promo Extension
	isVisibleInPromo: boolean;
	promoImage: Array<Image> | string;	// Type string is management only

	// CI Extension
	ciIsVisible?: boolean;
	ciSubtitle?: string;

	// Sponsored Posts Flag Feature
	isSponsored: boolean;

	// Category
	category: blogCategory | string; // can be null,  string incase of admin / post creation, must be category ID

	// Raffles
	raffles: Array<IRaffleTeaser> | Array<number> | null; // can be null, number incase of admin / post creation, must be raffleID
};

export interface blogPreviewResponse {
	id: number;
	title: string;
	subtitle: string;
	publishDate: Date;
	authors: bohnePortrait[];
	thumbImage: Array<Image>;
	promoImage: Array<Image>;
	isSponsored: boolean;
	category: blogCategory;	// can be null
};

export interface blogPostCreatedResponse {
	id: number;
};


