import { Image } from "../../shared/";


export interface searchResultEpisode {
	id: number;
	title: string;
	showName: string;
	thumbnail: Array<Image>;
	firstBroadcastdate: Date;
};

export interface searchResultShow {
	id: number;
	title: string;
	thumbnail: Array<Image>; 
};

export interface searchResultBlog {
	id: number;
	title: string;
	thumbnail: Array<Image>;
	publishDate: Date;
};

export interface searchResultResonse {
	shows: Array<searchResultShow>;
	episodes: Array<searchResultEpisode>;
	blog: Array<searchResultBlog>;
};
