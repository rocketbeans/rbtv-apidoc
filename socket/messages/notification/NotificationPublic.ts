import { NotificationType, Image } from "../../../shared/"
import { UserDigitalGoodieType } from "../../../response";

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

export interface GenericNotification {
	title: string;
	text: string;
	url?: string;
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
	date: Date;			// Date when the show is live
	aheadStep: number;	// ahead-of-live step that has generated this notification, in Minutes (Example: if its 60 this means the item will be live in 60 mintes)
	thumbnail: string; // Schedule has own thumbnails which were not available in multiple sizes, yet
	channelGroups: Array<string>;
};

export interface NotificationDataBohneLive {
	mgmtid: number;
	name: string;
	//
	title: string;
	show: string;
	id: number;
	date: Date;		// Date when the bohne is live
	aheadStep: number;	// ahead-of-live step that has generated this notification, in Minutes (Example: if its 60 this means the item will be live in 60 mintes)
	thumbnail: string; // Schedule has own thumbnails which were not available in multiple sizes, yet
	channelGroups: Array<string>;
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

export interface NotificationDataUserNewDigitalGoodie {
	title: string;
	goodieType: UserDigitalGoodieType;
};

export interface NotificationDataUserNewClaimableGoodie {
	customTitle: string | null;	// if set, this should be the title displayed by your application
	customBody: string | null;	// if set, this should be the body displayed by your application
	title: string;
	goodieType: UserDigitalGoodieType;
};


export interface NotificationDataGenericText {
	title: string; // title entered by admin user
	body: string;	// text entered by admin user
	url?: string; // url to go to when clicking on notification, as set by admin user
};