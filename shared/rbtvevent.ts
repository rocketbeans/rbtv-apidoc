
import { Image } from "./image";

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
};

export interface IRBTVEvent {
	slug: string;			// unique identifier, up to 24 chars, [a-z0-9-_]
	name: string;			// userfriendly, visible name
	descriptionHTML: string;// event description (html)
	descriptionMD?: string;	// event description (markdown, admin only)
	active: boolean;		// active flag
	teams?: Array<IRBTVEventTeam>;
	cmspage: string | null;		// id of cms page with more content
};

export interface IRBTVEventTeamStats {
	id: number;				// team identifier
	activeUsers: number;
	totalUsers: number;
};
