
//
// Vote Interaction Specific
//
export interface VoteFrontendData {
	question: string;
	theme: string;			// null when default.
	options: Array<string>;
	votedOption: number;	// represents to offset in options array,
	// null when not votd
};



