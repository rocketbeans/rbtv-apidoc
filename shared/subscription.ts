//
// Types Related to Subscriptions & Notifications
//
export const enum SubscriptionType {
	ST_BOHNE = 0,
	ST_SHOW,
	ST_HIGHLIGHT,
	ST_REGIE,
	ST_BLOG,

	ST_NUM
};

export interface Subscription {
	type: SubscriptionType;
	id: number;
	flags?: SubscriptionFlags;
};

export interface SubscriptionFlags {
	notifyEmail: boolean;
	notifyBrowser: boolean;
	notifyWhatsapp: boolean;
};
