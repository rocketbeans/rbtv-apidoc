import { bohnePortrait, Image, streamInfoShow } from "../../shared";

export type ServiceType = 'twitch' | 'youtube';
export type ChannelGroupType = 'main' | 'talent' | 'guest';

export interface Channel {
	mgmtId: number;
	channelGroupId: number;		// channel identifier, such as rocketbeanstv or bonjwa
	name: string;				// channel name
	title: string;				// public name, such as "Twitch" or "Bonjwa Twitch"
	url: string;				// public url to service (suchas twitch channel url)
	serviceType: ServiceType;
	platformId: string;			// Service-specific unique identifier, twitch = channelid
	platformIcon: string;		// url to the plattform id
	platformThumbnail: string;	// url to the plattform thumbnail
	ytToken?: string;			// if service type youtube this is the stream token
	ytLiveChatId?: string;		// if service type youtube this is the live chat id
	twitchChannel?: string;		// if service type twitch this is the twitch channel name (e.g. rocketbeanstv)
	currentGame?: string;		// name of the game currently played on the stream
	currentlyLive: boolean; 	// is the stream currently streaming
	viewers: number;			// current number of viewers (updated every 20s)
};

export interface ChannelGroupIcon {
	[dimensions: string]: string;
};

export interface ChannelGroup {
	mgmtId: number;				// channel group identifier, such as rocketbeanstv or bonjwa
	type: ChannelGroupType;
	name: string;
	description?: string;			// channel description
	channelGroupIcon: Array<Image>;	// custom channel icon (mgmt)
	channels?: Channel[];
	bohnen?: Array<bohnePortrait>;	// list of bohnen participating in the stream
	currentlyInMainContext: boolean;
	priority: number;
};

export interface ChannelGroupStream {
	channelGroup: ChannelGroup,
	streamInfoShow: streamInfoShow
};

export type ChannelGroupInfo = Array<ChannelGroupStream>;
