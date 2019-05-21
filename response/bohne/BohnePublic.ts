
//
// Staff Related Extended User info & Data
//
import { link, Image } from "../../shared";

export interface bohneResponse {
	mgmtid: number;
	nickname?: string;
	firstname: string;
	lastname: string;
	contentMK?: string;
	contentHTML?: string;
	portraitImage: Array<Image> | string;	// Type string is management only
	public: boolean;
	listed?: boolean;	// Admin: false = will not be reported in /all endpoints
	showreelURL?: string;
	links: Array<link>;
	role: string;
	uid: number;
	episodeCount?: number;
	sortPrio?: number;
	isSubscribed?: boolean;
};

