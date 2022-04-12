import { tMediaType, link } from ".";
import { ServiceType } from "../response";

export interface streamCountChannelInfo {
	name: string;
	serviceType: ServiceType;
	url: string;
	count: number;
};

export interface streamCount {
	youtube: number;
	twitch: number;
	total: number;
	external?: Array<streamCountChannelInfo>; // only for legacy API user
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
	links: Array<link>;
};
