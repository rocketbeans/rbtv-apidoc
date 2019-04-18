
//
// Klix Interaction Specific
//
export interface KlixxFrontendData {
	player: {
		points: number,
		fishcardUsedRound: number;	// Round 0 == Not used, // available
		lastVotedRound: number;
		lastVotedViews: number;
		hostVoteOption: 'lars' | 'florentin';	// null if not voted.
	};

	votingEnabled: boolean;
	hostVoteEnabled: boolean;

	round: {
		round: number;

		modifiers: {
			german: boolean;
			timecode: boolean;
			phonenumber: boolean;
		};

		timeLeft: number; // ms, only relevant if countdownRunning=true
		countdownRunning: boolean;
	};
};

export interface KlixxBetData {
	views: number;
	fishcard: boolean;
}

export interface KlixxKingVoteData {
	option: 'lars' | 'florentin';
}

