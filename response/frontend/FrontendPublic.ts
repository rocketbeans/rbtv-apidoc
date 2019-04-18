import { cmsRouteResponse, authProvider } from "../";
import { streamInfo } from "../../shared";

export interface websocketParameters {
	url: string;
	path: string;
}

export interface frontendInitResponse {
	routes: cmsRouteResponse[];
	authProviders: authProvider[];
	websocket: websocketParameters;
	streamInfo: streamInfo;
	recaptchaSiteKey: string;
	pageTheme: string;
	randomYoutubeApiKey: string;
};
