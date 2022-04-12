import { ChannelGroup, videoToken } from "..";
import { bohnePortrait, tMediaType, Image, link } from "../../shared/";

export interface scheduleItem {
	id: number;
	title: string;
	topic: string;
	game: string;
	showId: number;

	episodeId: number;
	episodeImage: string;
	episodeImages: Array<Image>;

	bohnen: Array<bohnePortrait>;

	timeStart: Date;
	timeEnd: Date;
	publishingDate: Date | null;
	duration: number;
	durationClass: number;

	// This item wont be available as VoD
	streamExclusive: boolean;

	// Filter Support 
	isSubscribed?: boolean;

	type: tMediaType;

	// Links
	links: Array<link>;

	channelGroups: Array<ChannelGroup>;

	openEnd: boolean;
};

export enum PublishingDelayState {
	ON_TIME = 0,
	PROBABLY_DELAYED,
	DELAYED
};

// Note:
//  a schedule object always represents one day
export interface schedule {
	date: Date;
	elements: scheduleItem[];
};

export interface ChannelGroupSchedule {
	channelGroup: ChannelGroup;
	schedule: schedule[];
};

export interface GetChannelGroupScheduleRequest {
	startDay: number;				// Unix timestamp
	endDay: number;					// Unix timestamp
	filterChannelGroups: Array<string>;	// List of channelGroupIds to get schedules for
};

export interface UploadSchedule {
	date: Date;
	elements: UploadScheduleEntry[];
};

export interface UploadScheduleEntry {
	id: number; // === mediaEpisodeId
	tokens?: Array<videoToken>;	// video tokens if present
	bohnen?: Array<bohnePortrait>; // bohnen if present
	uploadDate: Date;  // wann das Video hochgeladen wird/wurde
	publishingDate?: Date; // siehe Schedule; wenn das Video im Livestream lief, wann lief es? (OPTIONAL; wenn zu nervig, weglassen) 
	title: string;  // media Episode Title
	topic?: string; // media episode topic
	showId: number; // id der Show des Videos
	showTitle: string; // Showname
	showThumbnail: Image[]; // Show Poster Bilder
	publishingDelayState?: PublishingDelayState;
	publishingDelayComment?: string;
};
