import { IRBTVEvent } from "../../../shared";

export interface AC_RBTVEVENT_ACTIVATED {
	slug: string;
	data: IRBTVEvent;	// Will also Include Team Information
};

export interface AC_RBTVEVENT_DEACTIVATED {
	slug: string;
};

export interface AC_RBTVEVENT_CHANGED {
	slug: string;
	data: IRBTVEvent;	// Will also Include Team Information
};

// Notifies  the client about joining a team
export interface AC_RBTVEVENT_TEAM_JOINED {
	slug: string;
	teamId: number;
};
