export interface AC_ROCKET_MESSAGE {
	command: string;
	description?: string;
	startVotes: number;
	targetVotes: number;
	runTime: number;
	cooldown: number;
	startDate?: Date;
	currentVotes?: number;
}
