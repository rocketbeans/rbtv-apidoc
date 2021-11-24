
import { Image } from "./image";
import { link } from "./link";

export const enum RBTVEventTeamJoinStrategy {
	DISABLED = 0,
	JOINABLE,
	AUTOASSIGN_ODD,
	AUTOASSIGN_EVEN
};

export interface IRBTVEventTeam {
	id: number;						// system-wide unique identifier
	name: string;					// userfriendly, visible name, up to 32 chars
	description: string | null;		// optional description
	color: string;					// rgb, hex format (#AABBCC) allowed: [#A-Fa-f0-9]
	icon: Array<Image> | string;	// string is management only
	joinStrategy: RBTVEventTeamJoinStrategy;
	eventSlug?: string;
	internalSlug?: string;			// Used for Team Identification against external components 
};

export interface IRBTVEvent {
	slug: string;					// unique identifier, up to 24 chars, [a-z0-9-_]
	name: string;					// userfriendly, visible name
	descriptionHTML: string;		// event description (html)
	descriptionMD?: string;			// event description (markdown, admin only)
	active: boolean;				// active flag
	teams?: Array<IRBTVEventTeam>;
	cmspage: string | null;			// id of cms page with more content
	subLinks: Array<link> | null;	// subnavigation links (client implementation should provide a navigation containing those links)
};



export interface IRBTVEventTeamStatsTeam {
	id: number;				// team identifier
	activeUsers: number;
	totalUsers: number;
};

export interface IRBTVEventTeamStats {
	[teamId: number] : IRBTVEventTeamStatsTeam
};
