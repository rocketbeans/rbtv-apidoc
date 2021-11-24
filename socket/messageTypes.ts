

// Sides:	A => Api
//			C => Client
//			R => Regietool
//			W => RBSC Wall
//
export enum socketMessageTypes {
	// Info
	AC_HELLO,

	// Ping, Pong!
	AC_PING,	// See: XX_PING
	CA_PONG,	// See: XX_PING

	// Auth
	AC_AUTHENTICATION_REQ,
	CA_AUTHENTICATION,
	AC_AUTHENTICATION_RESULT,
	AC_AUTHENTICATION_RENEW_TOKEN_REQ,

	// Notifications
	AC_NOTIFICATION,
	CA_NOTIFICATION_READ,
	CA_NOTIFICATION_DELETE,
	CA_NOTIFICATION_DELETE_ALL,
	AC_NOTIFICATION_READ,
	AC_NOTIFICATION_DELETE,
	AC_NOTIFICAITON_DELETE_ALL,

	//
	AC_STREAM_INFO,


	// Episode Progress Related
	CA_MEDIA_EPISODEPROGRESS_UPDATE,

	// Interaction, Management; Regietool
	RA_INTERACTION_CREATE,
	AR_INTERACTION_CREATED,
	RA_INTERACTION_LIST_ACTIVE,
	AR_INTERACTION_LIST,
	RA_INTERACTION_ACTIVATE,
	RA_INTERACTION_DEACTIVATE,
	RA_INTERACTION_EVENT,
	RA_INTERACTION_EVENT2,	// uses socket-io native parameters for passing data between regietool && api
	AR_INTERACTION_EVENT,
	RA_INTERACTION_PROPERTY_UPDATE, 
	AR_INTERACTION_DEACTIVATED,

	// Regietool generic event
	RA_EVENT,

	// Interaction, Client Side / Frontend
	AC_DYNINTERACTION_START,
	AC_DYNINTERACTION_END,
	AC_DYNINTERACTION_PROPERTY_UPDATE,
	AC_DYNINTERACTION_EVENT,
	CA_DYNINTERACTION_EVENT,
	AC_DYNINTERACTION_LIST,
	CA_DYNINTERACTION_REQSTART,	
	AC_DYNINTERACTION_FRONTENDDATA, 

	// RBTV Event
	AC_RBTVEVENT_ACTIVATED,			// RBTVEvent Active/Activated
	AC_RBTVEVENT_DEACTIVATED,		// RBTVEvent Stopped
	AC_RBTVEVENT_CHANGED,			// RBTVEvent Active event changed (name, description, teams..)
	AC_RBTVEVENT_TEAM_JOINED,		// RBTVEvent Joined Team
	AC_RBTVEVENT_EVENT,				// RBTVEvent  Event (backend -> frontend: related information)

	// Cheatcodes
	AC_CHEATCODE_WINNING_NOTIFICATION,

	// Notification Queue
	RA_NOTIFICATIONQUEUE_RECV,
	RA_NOTIFICATIONQUEUE_ACK,

	// RBSC Wall
	WA_HELLO,
	AW_HELLO_ACK,
	
	WA_NAMES_REQ,			// Requests Names (see: AW_NAMES)
	AW_NAMES,				// Full set of names
	AW_NAMES_CYCLE_RESET,	// Flushes the current name animation (current names should fade out, screen should start filling again from local namepool)
	AW_NAMES_CYCLE_START,	// Starts the animation
	AW_NAMES_CYCLE_STOP,	// Stops the animation 
	AW_NAME_ADD_PRIO,		// Add a single name (PRIORITY) (should be added at beginning of the list)

	AW_GREETING,			// Play greeting animation (thanks for your visit/support..)
	WA_GREETING_BEGIN,		// Wall Display notifies api about 'greeting screen started'
	WA_GREETING_END,		// Wall Display notifies api about 'greeting screen finished'

	AW_QRCODE,				// New QR Code Data, screen should generate a new qr-code using the received parameters


	// Notify client about something changed, see interfaces - type dependend
	AC_CONTENT_CHANGED,		

	// Notify client about property changed
	AC_USERPROPERTY_CHANGED,

	// Notify client about own user object or user related data changed
	AC_USERDATA_CHANGED,

	//
	AC_CONFETTI,

	AC_CHAT_MESSAGE,					// Superchad chat message (backwards compatible string)
	AC_ROCKETMESSAGE_STARTED, 			// Signals all listeners that a rocket message event was started (continue with ints after special string fields)
	AC_ROCKETMESSAGE_STOPPED,			// Signals all listeners that a rocket message event was stoppen
	AC_ROCKETMESSAGE_BLOCKED,			// Signals all listeners that a rocket message event was blocked (e.g. by mod)
	AC_ROCKETMESSAGE_UNBLOCKED,			// Signals all listeners that a rocket message event was started (e.g. unblocked by time or mod)
	AC_ROCKETMESSAGE_UPDATE,			// Signals all listeners that a rocket message event was started (tick every second with current rocket message state)

	// Content update messages
	AC_NEW_BLOG_POST,					// Signals that there has been a new blog post
	AC_NEW_VIDEO,						// Signals that there has been a new video
	AC_NEW_SHOW,						// Signals that there has been a new show
	AC_NEW_BOHNE,						// Signals that there has been a new bohne
	AC_NEW_PODCAST,						// Signals that there has been a new podcast
	AC_BLOG_POST_CHANGED,				// Signals that a blog post has been changed
	AC_VIDEO_CHANGED,					// Signals that a video has been changed
	AC_SHOW_CHANGED,					// Signals that a show has been changed
	AC_BOHNE_CHANGED,					// Signals that a bohne has been changed
	AC_PODCAST_CHANGED,					// Signals that a podcast has been changed

	CA_PASSWORD_AUTHENTICATION,
	CA_REFRESH_TOKEN,
	AC_PASSWORD_AUTHENTICATION_RESULT,
	AC_REFRESH_TOKEN_RESULT
};
