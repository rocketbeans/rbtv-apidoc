
import { Image } from ".";

export interface bohnePortrait {
	mgmtid: number;
	name: string;
	role: 'onair' | 'offair' | 'external';
	episodeCount: number;
	images: Array<Image>;
};
