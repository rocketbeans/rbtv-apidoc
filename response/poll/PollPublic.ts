import { SupporterLevel } from "../../shared/supporter";

export interface Poll {
	id?: number;
	question: string;				// Fragetext: max 256 chars
	isMultiselect: boolean;			// Können ein oder mehrere Antworten ausgewählt werden?
	minSelect: number;				// ...wenn ja, wie viele mindestens?
	maxSelect: number;				// ...wenn ja, wie viele maximal?
	isPublic: boolean;				// Können reguläre User*innen den Poll sehen? ("Planungsmodus")
	createDate: Date;				// Datum/Uhrzeit wann der Poll erstellt wurde.
	startDate?: Date;				// Ab wann können User*innen abstimmen.
	stopDate?: Date;				// Bis wann können User*innen abstimmen.
	minSupporterLevel: SupporterLevel; // das benötigte RBSC Level, um teilzunehmen (angezeigt wird die Umfrage trotzdem)
	showResults: ShowPollResults;	// Zu welchem Zeitpunkt wird den User*innen das aktuelle Umfrageergebnis angezeigt?
	options: Array<PollOption>;		// Liste möglicher Antwortoptionen
	totalVotes?: number;			// Gesamtzahl votes
	totalUsersVoted?: number;		// Gesamtzahl voter
	voted?: boolean;				// Hat die User*in, die den Poll abruft, für irgendeine Option des Polls gestimmt?
};

export interface PollOption {
	id?: number;
	text: string;					// Antworttext: max 128 chars
	votes?: number;					// Anzahl Stimmen, die auf diese Option fallen
	voted?: boolean;				// Hat die User*in, die den Poll abruft, für diese Option gestimmt?
};

export enum ShowPollResults {
	ALWAYS = 'always',				// Zeige das aktuelle Resultat immer an
	AFTER = 'after',				// Zeige das Resultat erst nach ende der Abstimmphase an (currentData > stopDate)
	NEVER = 'never'					// Zeige niemals das Resultat an (nur im Adminbereich. z.B. für geheime Umfragen)
};

export interface GetPollRequest {
};

export interface VotePollOptionsRequest {
	options?: Array<number>;
};
