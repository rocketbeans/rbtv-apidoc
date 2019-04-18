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
	NT_NUM
};

