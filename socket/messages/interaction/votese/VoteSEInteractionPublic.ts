

export interface VoteSEVoteOption {
	color: string;			// #rrggbb
	icon: string | null;	// URI ( https://static.rocketbeans.tv/img/...png )
	label: string;			// Answer Label
	disabled: boolean;		// If flagged disabled: the client-implementation should show the option as non-clickable (disabled) button 
};


export interface VoteSEFrontendData {
	title: string;
	question: string | null;
	theme: string | null;
	options: Array<VoteSEVoteOption>;
	votedOption: number;
};
