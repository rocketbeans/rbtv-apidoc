//
// Staff Related Extended User info & Data
//
import { link, Image } from "../../shared";

export interface bohneResponse {
	mgmtid: number;
	nickname?: string;	// DEPRECATED - DO NOT USE - WILL GET REMOVED IN THE FUTURE - USE shortName OR computedName INSTEAD
	firstname?: string;	// DEPRECATED - DO NOT USE - WILL GET REMOVED IN THE FUTURE - USE shortName OR computedName INSTEAD
	lastname?: string;	// DEPRECATED - DO NOT USE - WILL GET REMOVED IN THE FUTURE - USE shortName OR computedName INSTEAD
	shortName: string;
	computedName: string;
	contentMK?: string;
	contentHTML?: string;
	portraitImage: Array<Image> | string;	// Type string is management only
	public: boolean;
	listed?: boolean;			// Admin: false = will not be reported in /all endpoints
	showreelURL?: string;
	links: Array<link>;
	role: string;
	episodeCount?: number;
	sortPrio?: number;
	isSubscribed?: boolean;
	userid?: number | null;			// [admin only] - relating rocketbeans.tv user
};
