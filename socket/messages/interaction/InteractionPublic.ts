
//
// Known Interaction Types:
//
export const cVoteInteraction = 'vote';
export const cVoteSEInteraction = 'votese';
export const cKlixxInteraction = 'klixx';
export const cClickerInteraction = 'clicker';
export const cGamepadInteraction = 'gamepad';
export const cTitleInteraction = 'title';
export const cTeamSelectInteraction = 'teamselect';		// Has no Frontenddata, the interaction should provide an rbtvevent team chooser
export const cTextDisplayInteraction = 'textdisplay';
export const cHypescoreRatingInteraction = 'hypescorerating';
export const cInteractiveIframeInteraction = 'interactiveiframe';
export const cBattleShipsInteraction = 'battleships';

export type tInteractionType = 'vote' | 'votese' | 'klixx' | 'clicker' | 'gamepad' | 'title' | 'teamselect' | 'textdisplay' | 'hypescorerating' | 'interactiveiframe' | 'battleships';

//
// Frontend, Dyninteraction
//
export interface AC_DYNINTERACTION_START {
	type: tInteractionType;
	id: string;
	showTitle: boolean;
	sortPrio: number;			// 0 first
	timeLeft: number | null;	// Unit: milliseconds,  the client implementtion is allowed to hide but not to destroy the interaction after reaching the timeout, api will provide a proper AC_DYNINTERACTION_END Event (also it is possible to update timeleft after it reached 0)
	eventSlug: string | null;	// If set, this interaction requires to be attending to the given event (by joining a team) - the client implementation should prohibit interacting + show a proper notification prompting the user to join a team.
	data: any; // Type Specific
};

export interface AC_DYNINTERACTION_END {
	id: string;
};

export type tUpdatableInteractionProperty = 'showTitle' | 'sortPrio' | 'timeLeft';

export interface AC_DYNINTERACTION_PROPERTY_UPDATE {
	id: string;
	property: tUpdatableInteractionProperty;
	value: any;
};

export interface AC_DYNINTERACTION_EVENT {
	id: string;
	event: string;
	data: any;
};

export interface CA_DYNINTERACTION_EVENT {
	id: string;
	event: string;
	data: any;
};

export interface AC_DYNINTERACTION_LIST { // List of running interactions (unique identifier)
	ids: Array<string>;
};

export interface CA_DYNINTERACTION_REQSTART {	// requests 'start' event for the given interaction to be sent to the requesting client
	id: string;
};

// client implemetation should update the UI / reinit the UI; data will contain the same information/structure as AC_DYNINTERACTION_START::data
export interface AC_DYNINTERACTION_FRONTENDDATA {
	id: string;
	data: any;
};
