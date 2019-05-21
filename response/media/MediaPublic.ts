import { Image, link, bohnePortrait, tMediaType } from "../../shared";

//
// Show
//
export interface mediaShowPodcastInfo {
	feedUrl: string;
	soundcloudId: string;
	itunesUrl: string;
	spotifyUrl: string;
};

export interface mediaShowResponse {
	id: number;
	title: string;
	description: string;
	genre: string;
	duration: number;
	isExternal: boolean;
	thumbnail: Array<Image>;
	backgroundImage?: Array<Image>;
	slideshowImages: Array<Array<Image>>;
	links: Array<link>;
	hosts: Array<bohnePortrait>;
	seasons: Array<mediaSeasonResponse>;
	hasUnsortedEpisodes: boolean;  // true if the show has episodes that are not linked to a season :( 
	lastEpisode: mediaEpisodeCombinedResponse;
	podcast: mediaShowPodcastInfo;
	statusPublicNote: string;
	isSubscribed?: boolean;
};

export interface mediaShowPreviewResponse {
	id: number;
	title: string;
	genre: string;
	isExternal: boolean;
	thumbnail: Array<Image>;
	hasPodcast: boolean;
	isSubscribed?: boolean;
};

export interface mediaShowPreviewMiniResponse {
	id: number;
	title: string;
	thumbnail: Array<Image>;
};

//
// Season 
//

export interface mediaSeasonResponse {
	id: number;
	showId: number;
	name?: string;
	numeric: number;
	thumbnail: Array<Image>;
	podcastId: number;
};


//
// Episode 
//

export interface mediaEpisode {
	id: number;
	showId: number;
	showName: string;
	seasonId: number;
	episode: number;
	title: string;
	description: string;
	thumbnail: Array<Image>;
	links: Array<link>;
	hosts: Array<number>; // Array of MGMTID
	youtubeTokens: Array<string>;
	firstBroadcastdate: Date;
	duration: number; // seconds
};


export interface mediaEpisodePreview {
	id: number;
	title: string;
	showId: number;
	showName: string;
	thumbnail: Array<Image>;
	hosts: Array<number>; // Array of MGMTID
	firstBroadcastdate: Date;
	duration: number;
}

export interface mediaEpisodeProgress {
	lastSeenPart: number;
	total: number;
	progress: Array<number>;
}

export interface mediaEpisodePreviewCombinedResponse {
	bohnen: { [mgmtid: number]: bohnePortrait };
	episodes: Array<mediaEpisodePreview>;
	progress?: { [episodeid: number]: mediaEpisodeProgress }; // User Specific Episode Progress; Will be sent if authenticated 
}

export interface mediaEpisodeCombinedResponse {
	bohnen: { [mgmtid: number]: bohnePortrait };
	episodes: Array<mediaEpisode>;
	progress?: { [episodeid: number]: mediaEpisodeProgress }; // User Specific Episode Progress; Will be sent if authenticated 
}


//
// PromoBox
//
export interface mediaPromoBoxContent {
	id: number;
	set: number;
	date: Date;
	visibleUntil?: Date;
	image: Array<Image> | string;	// Type string is management only
	title: string;
	subtitle: string;
	link: string;
	type: tMediaType;
}

export interface mediaCurrentPromoBoxResponse {
	content: mediaPromoBoxContent[];
}
