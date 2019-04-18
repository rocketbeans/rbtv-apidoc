
import { SubscriptionType, SubscriptionFlags } from '../../shared/';

export interface subscriptionResponse {
	type: SubscriptionType;
	id: number;
	subscribed: boolean;
	flags?: SubscriptionFlags;	// Used for GET and PATCH on /subscription/:type/:id
};

export interface subscriptionBohneData {
	id: number;
	name: string;
	flags: SubscriptionFlags;
}

export interface subscriptionShowData {
	id: number;
	title: string;
	flags: SubscriptionFlags;
};

export interface subscriptionBlogData {
	id: number;
	name: string;
	flags: SubscriptionFlags;
};

export interface subscriptionListResponse {
	bohnen: Array<subscriptionBohneData>;
	shows: Array<subscriptionShowData>;
	blog: Array<subscriptionBlogData>;
};

export interface subscriptionDefaultResponse {
	type: SubscriptionType;
	flags: SubscriptionFlags;
};
