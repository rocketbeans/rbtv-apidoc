

//
// Frontend, Dyninteraction
//
export interface AC_DYNINTERACTION_START {
	type: string;
	id: string;
	data: any; // Type Specific
};

export interface AC_DYNINTERACTION_END {
	id: string;
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


