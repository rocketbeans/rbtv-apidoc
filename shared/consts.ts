
export namespace consts {

	//
	// Header Fieldname used for Authentication/Authorization
	//
	export const AUTH_HEADER = 'authorization';

	//
	// Request Query Parameter name used for Authentication/Authorization (as alternative to header)
	//
	export const AUTH_QUERY = 'apiAuthKey';

	//
	// Default Group any user gets assigned to
	//
	export const USER_DEFAULT_GROUP = 'user';

	// 
	// Default User Keep Alive Ping/Pong time.
	//
	export const KEEPALIVE_PING = 30; // Seconds

	//
	// OAUTH Maximum Length of Redirection URIs
	//
	export const OAUTH_REDIRECT_URI_LENGTH = 96;
}

