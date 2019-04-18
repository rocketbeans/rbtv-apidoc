import { bohnePortrait, tMediaType } from "../../shared/";

export interface scheduleItem {
	id: number;
	title: string;
	topic: string;
	game: string;
	showId: number;

	episodeId: number;
	episodeImage: string;

	bohnen: Array<bohnePortrait>;

	timeStart: Date;
	timeEnd: Date;
	duration: number;
	durationClass: number;

	// This item wont be available as VoD
	streamExclusive: boolean;

	// Filter Support 
	isSubscribed?: boolean;

	type: tMediaType;
};


// Note:
//  a schedule object always represents one day
export interface schedule {
	date: Date;
	elements: scheduleItem[];
};
