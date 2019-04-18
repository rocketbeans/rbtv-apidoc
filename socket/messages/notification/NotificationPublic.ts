import { NotificationType, Image } from "../../../shared/"

export interface CA_NOTIFICATION_READ {
	id: number;
};

export interface CA_NOTIFICATION_DELETE {
	id: number;
};

export interface AC_NOTIFICATION_DELETE {
	id: number;
};

export interface AC_NOTIFICATION_READ {
	id: number;
	date: Date;
};

export interface CA_NOTIFICATION_DELETE_ALL {}; 
export interface AC_NOTIFICATION_DELETE_ALL {};


export interface AC_NOTIFICATION<T> {
	id: number;
	type: NotificationType;
	date: Date;
	status: 'unread' | 'read';
	data: T;
};

export interface NotificationDataRegie {
	title: string;
	message: string;
};

export const enum NotificationDataHighlightType {
	HT_NONE = 0,
	HT_SHOW,
	HT_SEASON,
	HT_EPISODE,
	HT_BLOG,
	HT_NUM
};

export interface NotificationDataHighlight {
	title: string;
	message: string;
	type: NotificationDataHighlightType;
	id: number;
};

export interface NotificationDataNewEpisode {
	show: string;
	title: string;
	id: number;
	thumbnail: Array<Image>;
};

export interface NotificationDataBohneNewEpisode {
	mgmtid: number;
	name: string;
	//
	show: string;
	title: string;
	id: number;
	thumbnail: Array<Image>;
};

export interface NotificationDataBohneNewShow {
	mgmtid: number;
	name: string;
	//
	show: string;
	id: number;
	thumbnail: Array<Image>;
};

export interface NotificationDataShowLive {
	title: string;
	id: number;
	thumbnail: string; // Schedule has own thumbnails which were not available in multiple sizes, yet 
};

export interface NotificationDataBohneLive {
	mgmtid: number;
	name: string;
	//
	title: string;
	show: string;
	id: number;
	thumbnail: string; // Schedule has own thumbnails which were not available in multiple sizes, yet 
};

export interface NotificationDataNewBlogPost {
	title: string;
	subtitle: string;
	id: number;
	thumbnail: Array<Image>;
};

export interface NotificationDataBohneNewBlogPost {
	mgmtid: number;
	name: string;
	//
	title: string;
	subtitle: string;
	id: number;
	thumbnail: Array<Image>;
};

export interface NotificationDataRaffleWinInfo {
	title: string; // Name of Raffle
	slug: string;	// Slug
	prizeTitle: string; // Title of Prize
	prizeImage: Array<Image>;
};

export interface NotificationDataRaffleShippedInfo {
	title: string; // Name of Raffle
	slug: string;	// Slug
	prizeTitle: string; // Title of Prize
	prizeImage: Array<Image>;
};
