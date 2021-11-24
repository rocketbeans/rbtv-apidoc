import { cmsRouteResponse, authProvider, ChannelGroupInfo } from "../";

export interface websocketParameters {
	url: string;
	path: string;
}

export interface frontendInitResponse {
	routes: cmsRouteResponse[];
	authProviders: authProvider[];
	websocket: websocketParameters;
	channelGroupInfo: ChannelGroupInfo;
	recaptchaSiteKey: string;
	pageTheme: string;
	randomYoutubeApiKey: string;
	frontendVersion: number;		// recommended frontend version
	vapidPublicKey?: string;
	applePushId?: string;
};
