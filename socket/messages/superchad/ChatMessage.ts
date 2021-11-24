export enum ChatMessageSource {
	TWITCH,
	YOUTUBE
}

export interface ChatChannelInfo {
	iconUrl: string;
	name: string;
	displayName: string;
};

export interface TwitchSpecialPayload {
	emotes: string,
	uuid: string,
	mod: boolean,
	subscriber: boolean
}

export interface YoutubeSpecialPayload {
	uuid: string;
	mod: boolean;
}

export interface AC_CHAT_MESSAGE {
	uuid: string;
	platformId: string;
	source: ChatMessageSource;
	sourceInfo: ChatChannelInfo | null;	// null if RBTV
	dateFrom: Date;
	message: string;
	user: string;
	userIdentifier: string;
	userPlatformIdentifier: string; // unique user id
	specialPayload: TwitchSpecialPayload | YoutubeSpecialPayload;
	supporterLevel?: number; // supporter level (only set if user has agreed to show it publicly)
}

export interface AC_PUBLIC_CHAT_MESSAGE {
	uuid: string;
	source: ChatMessageSource;
	sourceInfo: ChatChannelInfo | null;
	dateFrom: Date;
	message: string;
	user: string;
	userIdentifier: string;
	specialPayload: TwitchSpecialPayload | YoutubeSpecialPayload;
	supporterLevel?: number; // supporter level (only set if user has aggreed to show it publicly)
};
