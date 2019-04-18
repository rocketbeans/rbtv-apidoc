import { tMediaType } from ".";

export interface streamCount {
	youtube: number;
	twitch: number;
	total: number;
};

export interface streamInfoShow {
	title: string;
	topic: string;
	game: string;
	type: tMediaType;
	showId: number;
	timeStart: Date;
	timeEnd: Date;
	progress: number;
	viewers: streamCount;
};


export interface streamInfo {
	youtubeToken: string;
	twitchChannel: string;
	info: streamInfoShow;
};

