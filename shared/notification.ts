import { Image } from "../";

export const enum NotificationType {
	NT_REGIE = 0,
	NT_HIGHLIGHT,
	NT_EPISODE_NEW,			// New Episode for subscribed show
	NT_BOHNE_NEW_EPISODE,	// New content with subscribed bohne
	NT_BOHNE_NEW_SHOW,		// New content with subscribed bohne
	NT_SHOW_LIVE,			// Subscribed show is live
	NT_BOHNE_LIVE,			// Bohne is live
	NT_BLOGPOST,			// New Blogpost
	NT_BOHNE_NEW_BLOGPOST,	// Bohne posted a blogpost
	NT_RAFFLE_WININFO,		// Raffle -> Winning Information
	NT_RAFFLE_SHIPPEDINFO,	// Raffle -> Shipped!
	NT_NEW_DIGITAL_GOODIE,	// New Digital goodie received.
	NT_NEW_CLAIMABLE_GOODIE,	// New Digital goodie recieved that first needs to be claimed.
	NT_NUM
};

export interface WebPushNotificationPayload__Data {
	type: NotificationType;
	sub: string;	// uuid of relating subscription
	id: number;		// notification id
	url?: string;
};

export interface WebPushNotificationAction {
	action: string;
	title: string;
	icon: string;
};

export interface WebPushNotification {
	title: string;

	actions?: Array<WebPushNotificationAction>;
	badge?: string;	// url
	body?: string; // url
	data?: WebPushNotificationPayload__Data;
	dir?: 'auto' | 'ltr' | 'rtr';
	icon?: string; // url
	image?: string;	// url
	lang?: string; // BCP47 lang tag, (de-de, en-us..)
	renotify?: boolean;
	requireInteraction?: boolean;
	silent?: boolean;
	tag?: string;
	timestamp?: number; // unix time high res (ms)
	vibrate?: Array<number>;

	// used for apple notifications .. :
	urlparts?: Array<string> | null;
};
