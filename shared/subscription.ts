//
// Types Related to Subscriptions & Notifications
//
export const enum SubscriptionType {
	ST_BOHNE = 0,
	ST_SHOW,
	ST_HIGHLIGHT,
	ST_REGIE,
	ST_BLOG,
	ST_SEASON,

	ST_NUM
};

export enum AheadOfLiveNotifyTime {
	NONE		= 0,
	MINUTE_5	= 0x1,
	MINUTE_15	= 0x2,
	MINUTE_30	= 0x4,
	HOUR_1		= 0x8,
	HOUR_3		= 0x10,
	HOUR_6		= 0x20,
	HOUR_12		= 0x40,
	HOUR_24 	= 0x80,
	ALL			= 0xff
};

export const AheadOfLiveNotifyIndex2Time = [5, 15, 30, 60, 180, 360, 720, 1440];	// unit: minutes

export type AheadOfLiveNotifyTimeConfig = Array<boolean>;	/*	ArrayIndex2Time? See: AheadOfLiveNotifyIndex2Time
																Note:	array index 0 => flag for '5 min',
																		array index 1 => flag for '15 min',
																		...
																		array index 7 => flag for '1440 min'

																		As specified in AheadOfLiveNotifyIndex2Time
															*/

export interface Subscription {
	type: SubscriptionType;
	id: number;
	name?: string;		// Will be only set when fetching data from API (resolved in time), ignored on PUT/POST/etc requests
	flags?: SubscriptionFlags;
	filterSettings?: SubscriptionFilterSettings;
	filter?: Array<SubscriptionFilter>;
};

export interface SubscriptionFlags {
	notifyEmail: boolean;
	notifyBrowser: boolean;
	notifyWhatsapp?: boolean;
};

export interface SubscriptionFilter {
	type: SubscriptionType;
	id: number;
};

// Per Subscription Filter Settings:
export interface SubscriptionFilterSettings {
	isBlacklist: boolean;		// Are the specified filters treated as black or whitelist?
	newEpisode?: boolean;		// [applies to: Show, Bohne] Generate Notifications when new Episode will be released?
	newShow?: boolean;			// [applies to: Bohne] Generate Notifications when new Show will be published?
	newBlogPost?: boolean;		// [applies to: Bohne] Generate Notifications when Subscribed item is author of new Blogpost?
	aheadOfLive: boolean;		// [applies to: Show, Bohne] Generate Ahead Of Live Notifacitons if the subscribed item is about to be shown @ live-stream? 
	aheadOfLiveTimes: AheadOfLiveNotifyTimeConfig | null;	// [Applies to: Show, Bohne] if not null overrrides the per-user-subscription settings for the subscribed item
};
