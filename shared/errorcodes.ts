


export const enum errorCode {
	ERR_NO_ERROR = 0,

	/** GENERIC ERRORS */
	ERR_MISSING_PARAMETERS = 1000,				// Missing Parameters for the specified api endpoint 
	ERR_INVALID_BODYTYPE = 1001,				// Invalid Body Type; used by put / post handlers for parameter verification
	ERR_WRONG_PARAMETER_TYPE = 1002,			// Wrong Parameter type supplied, for example field must be array, string given.
	ERR_INVALID_SORT_TYPE = 1003,				// Unsupported sortBy / sort parameters
	ERR_UNSUPPORTED_SORTING = 1004,
	ERR_UNEXPECTED_ARGUMENT = 1005,				// Unexpected Range etc
	ERR_MISSING_FEATURE = 1006,					// Missing Feature / Unimplemented Code Path
	ERR_UNEXPECTED = 1007,						// Unexpected Error; such as race-conditions upon registration (email check/namecheck -> final insert conflict etc.. )
	ERR_PAGINATION_NEEDED = 1008,				// The requested action requires pagination parameters set (offset/limit)
	ERR_PAGINATION_LIMIT_EXCEEDED = 1009,		// The Requested Limits exceeds the Actions maximum supported limit
	ERR_PAGINATION_NO_MORE_DATA = 1010,			// The requested action cannot provide any more data for the requested offset.
	ERR_ACTION_REQUIRES_EMAIL_SET = 1011,		// The requested action requires a valid email set
	ERR_RECAPTCHA_INVALID = 1012,				// Used to refuse recaptcha challenge
	ERR_APICALL_REMOVED = 1013,					// The requested api call has been removed & is no longer available
	ERR_INVALID_JSON = 1014,					// Invalid JSON; Usually thrown when incomming json is invalid
	ERR_TERMS_NOT_ACCEPTED = 1015,				// The requesting User needs to acknowledge our Terms of Service, see data for details (interface TermsErrorData)
	ERR_QUERY_PARAM_PROCESSING_FAILED = 1016,	// Failed to Process the given query parameters, see errorMessage for details (missing parameter, wrong type, out of bounds)
	ERR_IP_RESTRICTED = 1017,					// The requested route/action is ip-restricted

	/** External Api Proxy Errors */
	ERR_EXTAPIPROXY_CALL_NOT_SUPPORTED = 1100,			// The Requested method or context is not supported
	ERR_EXTAPIPROXY_UPSTREAM_API_ERROR = 1101,			// Upstream API Returned an Error - contact rocket-beans with provided error id for details
	
	
	/** AUTH ERRORS */
	ERR_AUTH_TOKEN_INVALID = 2001,								// Invalid or expored token (can be refresh or normal token)
	ERR_AUTH_MISSING_HEADERS = 2002,							// Missing Authentication header for permission check
	ERR_AUTH_NO_PERMISSION = 2003,								// User does not has the required permission assigned
	ERR_AUTH_USER_INVALID = 2100,								// Used by local authentification, username unknown or wrong password
	ERR_AUTH_USER_NOT_FOUND = 2101,								// /user/:id, user not found (also used by account validation)
	ERR_AUTH_NOT_VERIFIED = 2102,								// User account not activated or verified
	ERR_AUTH_BLOCKED = 2103,									// User Blocked (account suspended, blocked)
	ERR_AUTH_OAUTH_ONETIMETOKEN_INVALID = 2104,					// The Given One-Time-Token for login/valdiation is invalid (UserVerifyToken System, Auth/User Controller)
	ERR_AUTH_OAUTH_REG_INCOMPLETE = 2105,						// OAuth Regstration incomplete (Displayname/terms not ste)
	ERR_AUTH_TERMS_NOT_ACCEPTED = 2106,							// User needs to accept new terms.
	ERR_AUTH_DISCOURSESSO_VALIDATION_FAILED = 2107,				// Failed to validate the Discourse SSO Request (malformed url?)
	ERR_AUTH_DISCOURSESSO_PAYLOAD_DECODE_FAILED = 2708,			// Payload Decode Failed (invalid payload supplied / incompatible etc ..)
	ERR_AUTH_SECONDFACTOR_REQUIRED = 2709,						// User Has secondFactor enabled (additional parameter required)
	ERR_AUTH_SECONDFACTOR_INVALID = 2710,						// User provided secondfactor code is invalid
	ERR_AUTH_SECONDFACTOR_RECOVERY_INVALID = 2711,				// User provided secondfactor recovery code is invalid 
	ERR_AUTH_SECONDFACTOR_RECOVERY_DENIED = 2712,				// User provided secondfactor recovery code is valid, but denid (account is maintainer of apps)
	ERR_AUTH_SECONDFACTOR_EXTERNALPROVIDERLOGIN_INVALID = 2713,	// User provided secondfactor code is invalid (while trying to login via external provider like steam / google etc)
	ERR_AUTH_UNSUPPORTED_AUTHORIZATION_SCHEMA = 2714,			// Unsupported Type for 'Authorization'-Header (not Bearer)
	ERR_AUTH_TOKEN_CREATION_FAILED = 2715,						// Internal error, cannot create token
	ERR_AUTH_RESETPASS_OAUTH_REG_INCOMPLETE = 2716,				// Password reset refused/failed as the user has not completed his/her external-auth-provider registration (setup of displayname/terms)
	ERR_AUTH_CAPTCHA_REQUIRED = 2717,							// Authentication Requres Captcha being solved (usually happens after a specific amount of failed login-attempts)
	ERR_AUTH_CAPTCHA_FAIL = 2718,								// Captcha could not be verified 
	ERR_AUTH_EXTERNAL_TYPE_INVALID = 2719,						// The Requested external provider type is invalid
	ERR_AUTH_EXTERNAL_TYPE_NOT_AVAILABLE = 2720,				// The Requested external provider is (temporarily) not available
	ERR_AUTH_EXTERNAL_STATE_NOT_FOUND = 2721,					// The given state does not exist
	ERR_AUTH_EXTERNAL_STATE_INVALID = 2722,						// The given state is not in an acceptable state for the requested action
	ERR_AUTH_EXTERNAL_NAVTARGET_INVALID = 2723,					// The given navigationTarget is invalid or exceeds length limits
	ERR_AUTH_EXTERNAL_MAC_VERIFY_FAILED = 2724,					// Failed to verify request while creating external state
	ERR_AUTH_2FA_REQUIRED = 2725,								// The Requested Route requires the user to have 2FA enabled
	ERR_AUTH_SPECIAL_PERMISSION_REQUIRED = 2726,				// The Requested Route requires a special access-permission

	/** Bohne Erors (Staffinfo) */
	ERR_BOHNE_NOT_FOUND = 2201,					// Bohne Not found.
	ERR_BOHNE_INVALID_ROLE = 2202,				// Unsupported Role.
	ERR_BOHNE_PORTAIT_INVALID = 2203,			// The given image is unknown or invalid
	ERR_BOHNE_NO_USERACCOUNT_LINKED = 2204,		// The given Bohne (mgmtid) has no page-user-account linked


	/** Image Uploader Errors */
	ERR_IMAGEUPLOAD_INVALID_IMAGE = 2301,		// Invalid or Missing Image
	ERR_IMAGEUPLOAD_INVALID_TYPE = 2302,		// Invalid or unknown type
	ERR_IMAGEUPLOAD_TOOLARGE = 2303,			// Uploaded file exceeds types maximum allowed filesize
	ERR_IMAGEUPLOAD_INVALID_DIMENSIONS = 2304,	// Imagesize Invalid (min/max size)
	ERR_IMAGEUPLOAD_FAIL_TEMP = 2305,			// Upload failed, failed to store entity (already pending temp images for this type)
	ERR_IMAGEUPLOAD_MISSING_PERMISSION = 2306,	// Upload failed, the given image type requires a special permission, which the user-agent does not fulfil

	/** Blog Errors */
	ERR_BLOG_AUTHOR_NOT_FOUND = 2401,			// The given Author UserID is not found / not a bohne
	ERR_BLOG_POST_NOT_FOUND = 2402,				// Blog Post not found
	ERR_BLOG_UNSUPPORTED_FEED_TYPE = 2403,		// Unsupported Feed Type (RSS/ATOM ETC)
	ERR_BLOG_CATEGORY_NOT_FOUND = 2404,			// Requested Blog Category not found
	ERR_BLOG_CATEGORY_INVALID = 2405,			// Requested Blog Category does not match the requirements
	ERR_BLOG_CATEGORY_ALREADY_EXISTS = 2406,	// Requested Blog Category already exists
	ERR_BLOG_CATEGORY_CONTAINS_POSTS = 2407,	// Blog Category contains posts and cannot be deleted\
	ERR_BLOG_INVALID_TITLE_IMAGE = 2408,		// Unknown image id or invalid type - see message for details
	ERR_BLOG_INVALID_PROMO_IMAGE = 2409,		// Unknown image id or invalid type - see message for details
	ERR_BLOG_INVALID_THUMB_IMAGE = 2410,		// Unknown image id or invalid type - see message for details
	ERR_BLOG_RAFFLE_INVALID = 2411,				// Requested Raffle does not exist / is uknown

	/** Streamcount Errors */
	ERR_STREAMCOUNT_UNAVAILABLE = 2501,

	/** User Errors */
	ERR_USER_UNKNOWN = 2601,							// Unknown user / userid
	ERR_USER_DISPLAYNAME_TAKEN = 2602,					// Displayname already in use
	ERR_USER_EMAIL_TAKEN = 2603,						// Email Address used by another account
	ERR_USER_UNKNOWN_GROUP = 2604,						// Unknown Group
	ERR_USER_DISPLAYNAME_INVALID = 2605,				// Displayname Contains Invalid/Unallowed Characters
	ERR_USER_TERMS = 2606,								// Terms Not Accepted	
	ERR_USER_PRIVACYPOLICY = 2607,						// Privacy Policy Not Accepted
	ERR_USER_SIGNUP_DISABLED = 2608,					// Signup is disabled 
	ERR_USER_PASSWORD_TOO_SHORT = 2609,					// Password too short
	ERR_USER_VERIFYTOKEN_INVALID = 2610,				// Invalid/Unknown Verification Token
	ERR_USER_VERIFYTOKEN_EMAILCHANGEDOK = 2611,			// Indirect Error Code: Verify Token Was ok; email changed
	ERR_USER_VERIFYTOKEN_VALIDATEDOK = 2612,			// Indirect Error Code: Verify Token Was ok; User Account Activated
	ERR_USER_VERIFYTOKEN_BLOCKED = 2613,				// Token found & Valid; but user is blocked - cannot be applied
	ERR_USER_VERIFYTOKEN_INVALIDSTATE = 2614,			// Token found & Valid, but user is not in verification state
	ERR_USER_VERIFYTOKEN_EMAILINUSE = 2615,				// E-Mail Address is already in use (this can happen if the user has a pending change request while another user registers a new account this the requested addres while the change is pending)
	ERR_USER_REGISTER_OAUTH_INVALIDSTATE = 2616,		// User is not in OAUTH_PENDING Account State or has displayname set && was trying to register
	ERR_USER_INVALID_PW = 2617,							// Invalid/Incorrect Password
	ERR_USER_VERIFYTOKEN_PWCHANGEOK = 2618,				// Indirect Error Code: Verify Token was ok; password changed
	ERR_USER_AUTHPROVIDER_NOTEXIST = 2619,				// The given Auth Provideer (OAuth/External) does not exist for the given user
	ERR_USER_AUTHPROVIDER_ISLAST = 2620,				// Used when the user tries to delete the last auth provider that's used to identify the account
	ERR_USER_VERIFYTOKEN_PAYPALOK = 2621,				// Token found & valid, paypal address of the user has been verified
	ERR_USER_DELETE_FAIL = 2622,						// Deletion failed
	ERR_USER_DELETE_PASS_INVALUD = 2623,				// password invalid (deletion)
	ERR_USER_CHANGE_DISPLAYNAME_THROTTLED = 2624,		// Display Name change Throttled.
	ERR_USER_VERIFYTOKEN_RAFFLEVALIDATE_OK = 2625,		// Token found & Valid, raffle participation validated!
	ERR_USER_VERIFYTOKEN_RAFFLEVALIDATE_REG_OK = 2626,	// Token foudn & Valid, raffle paritcipation validated, user account created!
	ERR_USER_SECONDFACTOR_ACC_NOT_SUITABLE = 2627,		// User is not suitable to setup 2ndfactor, (User has no email/password set or 2ndfactor is already active)
	ERR_USER_SECONDFACTOR_REMOVE_INVALID_TOKEN = 2628,	// Provided secondFactor Token is incorrect
	ERR_USER_SECONDFACTOR_REMOVE_FAIL = 2629,			// User is not allowed to remove secondFactor (apps connected as developer?)
	ERR_USER_SECONDFACTOR_SETUP_TOKENFAIL = 2630,		// User provided secondFactor token for completing the setup is invalid
	ERR_USER_DELETE_FAIL_HAS_OAUTH_APPS = 2631,			// User can't be deleted, is owner of apps
	ERR_USER_AUTHPROVIDER_REMOVE_FAIL = 2632,			// Failed to remove association of user<->externalAuthProvider,  failed hard / internal error
	ERR_USER_ACCOUNT_DELETION_OK = 2633,				// Token found & valid,  account deleted.

	/** Group Errors */
	ERR_GROUP_NOT_FOUND = 2701,			// Unknown group (id)
	ERR_GROUP_PERM_UNASSIGNABLE = 2702, // Tried to assign an unassignable permission (see message for details)
	ERR_GROUP_NAME_IN_USE = 2703,		// The given Name is already in use
	ERR_GROUP_NAME_IS_CONST = 2704,		// Group name cannot be changed

	/** Schedule Errors */
	ERR_SCHEDULE_INVALID_RANGE = 2801,			// The given range between start & end is not supported
	ERR_SCHEDULE_LEGACY_LIMIT_EXCEEDED = 2802,	// The given amount exceeds the supported maximum value
	ERR_SCHEDULE_LEGACY_NO_RUNNING_ITEM = 2803,	// The current-running-item couldn't be determined

	/** CMS Errors */
	ERR_CMS_PAGE_NOT_FOUND = 2901,		// The requested identifier was not found
	ERR_CMS_PAGE_ID_INVALID = 2902,		// The Requested identifier does not met the requirements
	ERR_CMS_PAGE_ID_IN_USE = 2903,		// The Requested identifier is already in use
	ERR_CMS_ROUTE_NOT_FOUND = 2904,		// The Requested route was not found 
	ERR_CMS_ROUTE_INVALID = 2905,		// The specified route identifier does not met the requirements
	ERR_CMS_ROUTE_IN_USE = 2906,		// the Specified route is already in use / already exists

	/** EMAIL Errors */
	ERR_EMAIL_INVALID = 3001,				// Invalid Email Syntax
	ERR_EMAIL_PROVIDER_BLOCKED = 3002,		// Mail Provider has been blocked
	ERR_EMAIL_TEMPLATE_TYPE_INVALID = 3003,	// The given template type is unknown / invalid

	/** Media Errors */
	ERR_MEDIA_SHOW_NOT_FOUND = 3101,			// The requested show (by ID) does not exist
	ERR_MEDIA_SEASON_NOT_FOUND = 3102,			// The requested season does not exist 
	ERR_MEDIA_EPISODE_NOT_FOUND = 3103,			// The request episode does not exist
	ERR_MEDIA_PROMOBOX_PROMO_NOT_FOUND = 3104,	// The rquested promo does not exist
	ERR_MEDIA_PROMOBOX_INVALID_TYPE = 3105,		// The given type is invalid
	ERR_MEDIA_PROMOBOX_IMAGE_INVALID = 3106,	// The given image id is unknown or invalid

	/** Search Errors */
	ERR_SEARCH_TERM_TOO_SHORT = 3201,	// Search term was too short

	/** Subscription Errors */
	ERR_SUBSCRIPTION_INVALID_TYPE = 3301,						// Invalid type (in this context)
	ERR_SUBSCRIPTION_IMPOSSIBLE = 3302,							// The given Entity can't be subscribed
	ERR_SUBSCRIPTION_FAILED = 3303,								// Failed to get subscriptions
	ERR_SUBSCRIPTION_NOT_SUBSCRIBED = 3304,						// The Requested type/id is not subscribed
	ERR_SUBSCRIPTION_WEBPUSH_SETUP_INVALID_ENDPOINT = 3305,		// The provided endpoint does not met our specifications (Must be: http or https, non private ip range)
	ERR_SUBSCRIPTION_WEBPUSH_SETUP_MISSING_P256DH_KEY = 3306,	// Parameter missing
	ERR_SUBSCRIPTION_WEBPUSH_SETUP_MISSING_AUTH_KEY = 3307,		// Parameter missing
	ERR_SUBSCRIPTION_WEBPUSH_SETUP_FAILED = 3308,				// Generic Failure while setting up the subscription
	ERR_SUBSCRIPTION_WEBPUSH_SETUP_LIMITREACHED = 3309,			// The Requesting User has reached the configured limit of web-push subscriptions per-user
	ERR_SUBSCRIPTION_UPDATE_FAILED = 3310,						// Failed to update the stored properties of an subscription 
	ERR_SUBSCRIPTION_RESET_FAILED = 3311,						// Failed to reset the given subscription (racing condition: unsubscribed while reset was pending OR this is an internal error)
	ERR_SUBSCRIPTION_MASS_RESET_FAILED = 3312,					// Failed to mass-reset all subscriptions of a given type (this is an internal error)
	ERR_SUBSCRIPTION_MASS_UPDATE_FAILED = 3313,					// Failed to mass-update all subscriptions of a given type (this is an internal error)
	ERR_SUBSCRIPTION_WEBPUSH_APPLE_VERSIONFAIL = 3314,			// Unsupported API Version of Apple WebPush Actions requested
	ERR_SUBSCRIPTION_WEBPUSH_APPLE_UNHANDLED_WEBSITE = 3315,	// Request for unhandled website 
	ERR_SUBSCRIPTION_WEBPUSH_APPLE_INVALID_ACCESSTOKEN = 3316,	// Invalid or expired accesstoken when requesting the package
	ERR_SUBSCRIPTION_WEBPUSH_APPLE_INVALID_AUTHHEADER = 3317,	// Invalid or missing 'authorization' http-header
	ERR_SUBSCRIPTION_WEBPUSH_APPLE_INVALID_DEVICETOKEN = 3318,	// Invalid/Malformed Device Token
	

	/** Simple Shop Errors */
	ERR_SIMPLESHOP_ITEM_NOT_FOUND = 3401,		// The requested Simple Shop Item does not exist
	ERR_SIMPLESHOP_ITEM_IMAGE_INVALID = 3402,	// Invalid or unknown image supplied

	/** Supporters Club Errors */
	ERR_SUPPORTER_IBAN_INVALID = 3501,						// Invalid IBAN (Syntax Error)
	ERR_SUPPORTER_PAYPALMAIL_INVALID = 3502,				// Invalid Paypal Email address (legacy paypal)
	ERR_SUPPORTER_PAYPAL_INVALID_VALUE = 3503,				// invalid / unsupported subscription amount/value 
	ERR_SUPPORTER_PAYPAL_ALREADY_SUBSCRIBED = 3504,			// user already has a susbcription active and can't subscribe again
	ERR_SUPPORTER_PAYPAL_SUBSCRIBE_INTERNAL_ERROR = 3505,	// Internal Paypal Error while creating the billing agreement
	ERR_SUPPORTER_PAYPAL_SUBSCRIBE_INVALID_TOKEN = 3506,	// The provided payptoken is invalid / there was an error executing the agreement
	ERR_SUPPORTER_PAYPAL_SUBSCRIBE_CANCEL_FAIL = 3507,		// Paypal Abo Cancellation failed
	ERR_SUPPORTER_PAYPAL_NOT_SUBSCRIBED = 3508,				// No Subscription
	ERR_SUPPORTER_ADDRESS_TERMS_REQUIRED = 3509,			// Must accept the shipping terms to set the address.
	ERR_SUPPORTER_ADDRESS_FIELD_VALIDATION_ERR = 3510,		// Field validation Error
	ERR_SUPPORTER_JOINREASON_INVALID_TYPE = 3511,			// The given type is unknown
	ERR_SUPPORTER_JOINREASON_INVALID_SHOW = 3512,			// The Provided Show does not exist.
	ERR_SUPPORTER_UNKNOWN_SUBSCRIPTION = 3513,

	/** Interaction */
	ERR_INTERACTION_UNSUPPORTED_TYPE = 3601,			// tried to create an unsupported interaction
	ERR_INTERACTION_INVALID_TYPE_FOR_OPERATION = 3602,	// tried to perform an action on an interaction which doesn't support the requested operation
	ERR_INTERACTION_UNKNOWN = 3603,						// the given interaction id is unknown or does not match the requested type.
	ERR_INTERACITON_ACTIVE = 3604,						// Tried to modify an active interaction
	ERR_INTERACTION_UNKNOWN_POLLOPTION = 3605,			// tried to modify an unknown poll option

	/** Billing */
	ERR_BILLING_CSV_INVALID = 3701,							// Invalid or Missing CSV File for CSV Upload
	ERR_BILLING_COMMERZBANK_TRANSACTION_NOT_FOUND = 3702,	// the given transaction id was not found

	/** Raffle */
	ERR_RAFFLE_ADDRESS_TERMS_REQUIRED = 3801,
	ERR_RAFFLE_ADDRESS_FIELD_VALIDATION_ERR = 3802,
	ERR_RAFFLE_NOT_FOUND = 3803,					// Raffle does not exists
	ERR_RAFFLE_PARTICIPATE_ALREADY_ENTERED = 3804,	// The Given E-Mail Address Already Participates
	ERR_RAFFLE_PARTICIPATE_EMAIL_HAS_USER = 3805,	// The given E-Mail Address for guest-participation already exists as a user account 
	ERR_RAFFLE_PARTICIPATE_EMAIL_BLOCKED = 3806,	// The given e-mail address is invalid/blocked provider
	ERR_RAFFLE_TERMS_REQUIRED = 3807,
	ERR_RAFFLE_GDPR_REQUIRED = 3808,
	ERR_RAFFLE_PARTICIPATE_USER_ADDRESS_REQ = 3809,	// Participation with RBTV-Account requires raffleshippingaddress to be set.
	ERR_RAFFLE_PARTICIPATE_NOT_IN_TIME = 3810,		// Participation not possible, startDate && endDate requirements have not been met
	ERR_RAFFLE_CHALLENGE_RESPONSE_FAILED = 3811,	// Challenge Response Number Verification failed
	ERR_RAFFLE_PARTICIPATE_SUPPORTER_ONLY = 3812,	// Cannot Participate as the requested Raffle requires a supporterlevel
	ERR_RAFFLE_SLUG_VALDATIONFAIL = 3813,			// Invalid Slug
	ERR_RAFFLE_SLUG_INUSE = 3814,					// Slug In use
	ERR_RAFFLE_FORM_VALIDATION_ERR = 3815,			// Form Field Validation error; used in admin
	ERR_RAFFLE_DELETE_IMPOSSIBLE = 3816,			// Cannot Delete Raffle because of .. reason
	ERR_RAFFLE_PARTICIPANT_NOT_FOUND = 3817,		// Participant not found
	ERR_RAFFLE_WINNER_NOT_FOUND = 3818,				// Requested winner num does not exist/not found
	ERR_RAFFLE_ADDRESS_DELETE_FAIL_PARTICIPATING = 3819,	// User currently has participations pending, cannot delete address.
	ERR_RAFFLE_WINNER_PRIZE_ALREADY_SENT = 3820,	// prize notification already sent, requires conrimation
	ERR_RAFFLE_TERMS_NO_EDIT_PERM = 3821,			// no permission to edit terms

	/** CDKey */
	ERR_CDKEY_TYPE_NOT_FOUND = 3901,				// Requested CDKey Type(id) does not exist
	ERR_CDKEY_TYPE_INVALID = 3902,					// Out of Range, invalid (NaN) etc
	ERR_CDKEY_TYPE_EXISTS = 3903,					// The Given CDKeyType already exists
	ERR_CDKEY_TYPE_FORM_VALIDATION_ERR = 3904,		// Form validation error, see message + data for details
	ERR_CDKEY_TYPE_HAS_KEYS = 3905,					// Action cannot performed: Type has keys assigned (delete)
	ERR_CDKEY_PRODUCT_NOT_FOUND = 3906,				// Requested Product id for given type not found
	ERR_CDKEY_PRODUCT_INVALID = 3907,				// Out of Range / invalid (nan) etc
	ERR_CDKEY_PRODUCT_FORM_VALIDATION_ERR = 3908,	// Form validation error, see message+data for details
	ERR_CDKEY_INVALID = 3909,						// Key Validation Error
	ERR_CDKEY_TOKEN_INVALID = 3910,					// Token invalid/expired
	ERR_CDKEY_TOOMANY_USES = 3911,					// All Free Uses are used up.
	ERR_CDKEY_ALREADY_CLAIMED = 3912,				// Cannot claim the key, alrady claimed
	ERR_CDKEY_ALREADY_CLAIMED_SAMEUSER = 3913,		// The Key is already claimed by the requesting user
	ERR_CDKEY_CLAIM_FAIL = 3914,					// Claim faled, this happens @ doublecheck, user may have tried to claim twice in parallel.
	ERR_CDKEY_CLAIMED = 3915,						// CDKey is claimed, cannot get download links
	ERR_CDKEY_NO_LICENCE = 3916,					// Requesting usre has no license (key) to access the given product
	ERR_CDKEY_ALREADY_OWNED = 3917,					// Keytype already owned by user

	/** OAuth: Auth */
	// Error Codes by RFC/Specification:
	ERR_OAUTH_SPEC_INVALID_REQUEST = 4001,
	ERR_OAUTH_SPEC_UNAUTHORIZED_CLIENT = 4002,
	ERR_OAUTH_SPEC_ACCESS_DENIED = 4003,
	ERR_OAUTH_SPEC_UNSUPPORTED_RESPONSE_TYPE = 4004,
	ERR_OAUTH_SPEC_INVALID_SCOPE = 4005,
	ERR_OAUTH_SPEC_SERVER_ERROR = 4006,
	ERR_OAUTH_SPEC_TEMPORARILY_UNAVAILABLE = 4007,
	

	/** OAuth: APPS */
	ERR_OAUTH_APP_NOT_FOUND = 4101,						// App Does not exist
	ERR_OAUTH_APP_NO_PERMISSION = 4102,					// No Permission for the given app id
	ERR_OAUTH_APP_FORM_VALIDATION_ERR = 4103,			// Form Validation Error (used upon app creation / edit)
	ERR_OAUTH_APP_CREATE_MISSING_SECONDFACTOR = 4104,	// Requesting Apiuser has no secondfactor authorizaiton activated
	ERR_OAUTH_APP_CREATE_LIMIT_EXCEEDED = 4105,			// Requesting Apiuser has exceeded his/her limit of apps per account
	ERR_OAUTH_APP_VERIFYDEV_TERMS_REQ = 4106,			// Must accept terms regarding mail for dev-verification
	ERR_OAUTH_APP_VERIFYDEV_NOT_FOUND = 4107,			// Given UserID has no pendning verification request

	/** OAuth: Scopes */
	ERR_OAUTH_SCOPE_NOT_FOUND = 4201,
	ERR_OAUTH_SCOPE_ALREADY_EXIST = 4202,
	ERR_OAUTH_SCOPE_FORM_VALIDATION_ERR = 4203,

	/** OAuth: Authorizations */
	ERR_OAUTH_AUTHORIZATION_NOT_FOUND = 4301,			// Given Authorization id is unknown or does not relate to the requesitng apiuser

	/** Mediacenter */
	ERR_MEDIACENTER_IMAGE_NOT_FOUND = 4401,				// Given Image ID is invalid / not found
	ERR_MEDIACENTER_IMAGE_ALREADY_PROCESSED = 4402,		// Given Image ID has been already processed
	ERR_MEDIACENTER_FORM_VALIDATION_ERR = 4403,			// Parameter Validation Failed (string length etc, see data for more info)
	ERR_MEDIACENTER_IMAGE_PROCESSING_FAILED = 4404,		// Image Processing (scaling, upload) failed
	ERR_MEDIACENTER_IMAGE_UNPROCESSED = 4405,			// Image is unprocessed, action cannot be performed
	ERR_MEDIACENTER_UNSUPPORTED_IMAGETYPE = 4406,		// Given Image Type is unknown / unsupported
	ERR_MEDIACENTER_DELETE_REJECT_IN_USE = 4407,		// Given Image is still being used - cannot be deleted

	/** Cache Administration */
	ERR_CACHE_INVALID_NAME = 4501,		// Invalid or Unknown Cache Name

	/** RBTV Event */
	ERR_RBTVEVENT_EVENT_NOT_FOUND = 4601,						// No event found with the given slug, or the slug is invalid
	ERR_RBTVEVENT_EVENT_FORM_VALIDATION_ERR = 4602,				// Form Validation Error -> invalid input (such as invalid characters etc)
	ERR_RBTVEVENT_EVENT_SLUG_IN_USE = 4603,						// The given Event-Slug is already in use
	ERR_RBTVEVENT_EVENT_ENABLE_FAIL = 4604,						// Enable Failed (another event still active?)
	ERR_RBTVEVENT_EVENT_DISABLE_FAIL = 4605,					// Disable Failed (not active?)
	ERR_RBTVEVENT_EVENT_DELETE_FAIL = 4606,						// Event deletion failed (is the event still active?)
	ERR_RBTVEVENT_TEAM_NOT_FOUND = 4607,						// The given team does not exist
	ERR_RBTVEVENT_TEAM_FORM_VALIDATION_ERR = 4608,				// Form Validation Error -> invalid input (such as invalid cahracters, length etc)
	ERR_RBTVEVENT_TEAM_DELETE_FAIL = 4607,						// Deletion Failed (is the relating event still active?)
	ERR_RBTVEVENT_NO_ACTIVE_EVENT = 4608,						// No Active Event found (generic error, the given action requires an event being active)
	ERR_RBTVEVENT_EVENT_INVALID = 4609,							// The given Event is invalid for the requested action.
	ERR_RBTVEVENT_TEAM_INVALID = 4610,							// The given Team is invalid for the requested action.
	ERR_RBTVEVENT_TEAM_NOT_JOINABLE = 4611,						// The given Team is not in a joinable state.
	ERR_RBTVEVENT_TEAM_JOIN_FAILED = 4612,						// Join Request failed (already joined another team?)
	ERR_RBTVEVENT_EVENT_NOT_JOINED_TEAM = 4613,					// The requesing user has not joined any team for the given event
	ERR_RBTVEVENT_TEAM_DELETION_FAIL_RELINTERACTIONS = 4614,	// Team deletion failed, the team has relating interactions
	ERR_RBTVEVENT_EVENT_DELETION_FAIL_RELINTERACTIONS = 4615,	// Event deletion failed, the event has relating interactions

	/** Cheatcodes */
	ERR_CHEATCODESET_NOT_FOUND = 4701,				// The Requested Cheatcode Set does not exist
	ERR_CHEATCODESET_FORM_VALIDATION_ERR = 4702,	// Form Validation Error -> invalid input (such as invalid characters etc)
	ERR_CHEATCODESET_ALREADY_IN_USE = 4703,			// The requested name is already in use
	ERR_CHEATCODE_NOT_FOUND = 4711,					// The requested cheatcode (id) does not exist
	ERR_CHEATCODE_FORM_VALIDATION_ERR = 4712,		// Form Validation Error -> invalid input (such as invalid characters etc)
	ERR_CHEATCODE_DELETE_FAIL = 4713,				// Deletion of cheatcode failed -> is the code still marked active?

	/** Instance Manager */
	ERR_INSTANCES_UNKNOWN = 4801,			// The Requested InstanceID is unknown

	/** Hypescore / Games */
	ERR_HYPESCORE_GAME_NOT_FOUND = 4901,		// The rqeuested Game (id) is unknown
	ERR_HYPESCORE_SEARCH_INVALIDQUERY = 4902,	// The Given Search query was too short or too long
	ERR_HYPESCORE_INVALID_SCORE_VALUE = 4903,	// The Given score/rating value is invalid (allowed: 1-10)
	ERR_HYPESCORE_GAME_SYNC_FAIL = 4904,		// Updating Game Database failed (mgmt)
	ERR_HYPESCORE_GAME_OVER = 4905,				// The Given game's voting is disabled (for example: Game released)
		

	/** Device / RBSC Wall */
	ERR_DEVICE_NOT_FOUND = 5001,						// The requested deveice (mac) does not exist
	ERR_DEVICE_DELETION_FAILED = 5002,					// Deletion failed.
	ERR_DEVICE_FILE_NOT_FOUND = 5003,					// File Id not found/invalid
	ERR_DEVICE_KEY_INVALID = 5004,						// Preshare Key invalid
	ERR_RBSCWALL_SET_NOT_FOUND = 5011, 					// RBSC Wall Display set id invalid / display set not found
	ERR_RBSCWALL_DISPLAY_NOT_FOUND = 5021,				// RBSC Wall Display invalid / display not found
	ERR_RBSCWALL_CREATE_DEVICE_ALREADY_IN_USE = 5022,	// RBSC Wall Display Creation failed, the given Device (mac) is already assigned 
	RRR_RBSCWALL_DISPLAY_INVALID_KEY = 5023,			// RBSC Wall Display - invalid preshared key (init)
	
	ERR_RBSCWALL_QR_VERIFY_FAILED = 5031,				// The Given QR Payload is invalid / expired
	ERR_RBSCWALL_REGISTER_FAILED_UNKNOWN_DISPLAY = 5032,// Register as visitor failed - the referenced display seems to be unknown?
	ERR_RBSCWALL_REGISTER_FAILED = 5033,				// Registration failed internally
	ERR_RBSCWALL_ANIMATIONTOKEN_INVALID = 5034,			// The given Animation token is invalid / unknown / expired
	ERR_RBSCWALL_DISPLAY_BUSY = 5035,					// The given Animation token is valid, but the display is busy
		

	/** User Property */
	ERR_USERPROP_NOT_FOUND = 5101,				// The Requested User Propery does not exist / is known / not set 
	ERR_USERPROP_INVALID_KEY = 5102,			// The Requested Key is unknown or does not met the rquirements
	ERR_USERPROP_DELETE_FAIL = 5103,			// Invalid Key or internal error
	ERR_USERPROP_TYPE_NOT_ALLOWED = 5104,		// The given value data-type is not accepted by the specified property key
	ERR_USERPROP_STRLEN_EXCEEDS_LIMIT = 5105,	// The given value exceeds the maximum length allowed for string contents
	ERR_USERPROP_OBJLEN_EXCEEDS_LIMIT = 5106,	// The given value exceeds the maximum serialized object-length 
	ERR_USERPROP_WRITE_RESTRICTED = 5107,		// The given property cannot be changed, write restriction enabled
	ERR_USERPROP_INVALID_DEFAULT = 5108,		// The supplied default-value configuration is invalid, see errormessage for details
	ERR_USERPROP_MASS_RESET_FAILED = 5109,
	ERR_USERPROP_MASS_INIT_FAILED = 5110,
	ERR_USERPROP_MASS_DELETE_FAILED = 5111,


	/** Superchad **/
	ERR_SUPERCHAD_MESSAGE_NOT_FOUND = 5201, 	// The given Message identifier is unknown / not found (or may be already expired)


	/** GoodiePool **/
	ERR_GOODIEPOOL_CLAIM_FAIL = 5301,					// Generic failure, caused by an unexpected internal error
	ERR_GOODIEPOOL_CLAIM_FAIL_NOT_ELIGIBLE = 5302,		// User does not met the requirements of the given Pool (such as SupporterLevel)
	ERR_GOODIEPOOL_CLAIM_FAIL_ALREADY_CLAIMED = 5303,	// User has already claimed the given Pool
	ERR_GOODIEPOOL_CLAIM_FAIL_OUT_OF_STOCK = 5304,		// The Pool is empty :(
	ERR_GOODIEPOOL_CLAIM_FAIL_EAGAIN = 5305,			// Try Again - may be caused by an internal race condition ..
	ERR_GOODIEPOOL_CLAIM_FAIL_UNKNOWN_POOL = 5306,		// The given Pool does not exist or may be expired.


	/** SupporterMassMail **/
	ERR_SUPPORTERMASSMAIL_INVALID_TEMPLATE = 5401,			// Unknown Template Id
	ERR_SUPPORTERMASSMAIL_PARAM_VALIDATION_ERROR = 5402,	// Invalid parameters supplied.
	ERR_SUPPORTERMASSMAIL_SEND_VERSION_MISMATCH = 5403,		// The given version does not match the stored Template version
	ERR_SUPPORTERMASSMAIL_BUSY = 5404,						// The System is still busy/processing the last mass-mailing request.

	/** Suporter Shop Email **/
	ERR_SHOP_MAIL_INVALID = 6000,

	/** Poll **/
	ERR_POLL_UNKNOWN = 7000,
	ERR_POLL_QUESTION_TOO_LONG = 7010,
	ERR_POLL_OPTION_TOO_LONG = 7020,
	ERR_POLL_NOT_ENOUGH_OPTIONS = 7030,
	ERR_POLL_TOO_MANY_OPTIONS = 7035,
	ERR_POLL_NOT_FOUND = 7040,
	ERR_POLL_STOP_GREATER_START_DATE = 7050,
	ERR_POLL_MIN_GREATER_MAX_SELECT = 7060,
	ERR_POLL_CANT_SWITCH_MODE_WHEN_ACTIVE = 7070,
	ERR_POLL_VOTE_OPTION_UNKNOWN = 7080,
	ERR_POLL_CANT_CHANGE_VOTE = 7090,
	ERR_POLL_MIN_SELECT_NOT_GREATER_ZERO = 7100,
	ERR_POLL_MAX_SELECT_NOT_GREATER_ONE = 7110,
	ERR_POLL_CANT_VOTE_NOT_STARTED = 7120,
	ERR_POLL_CANT_VOTE_ENDED = 7125,
	ERR_POLL_CANT_VOTE_SUPPORTER_LEVEL_TOO_LOW = 7130,
	ERR_POLL_VOTE_FAILED = 7140,
	ERR_POLL_UPDATE_FAILED = 7150,
	ERR_POLL_DELETE_FAILED = 7160,

	/** Playlists **/
	ERR_PLAYLIST_UNKNOWN = 8000,
	ERR_PLAYLIST_NOT_FOUND = 8010,
	ERR_PLAYLIST_NOT_ENOUGH_MEDIA_IDS = 8030,
	ERR_PLAYLIST_REBALANCE_FAILED = 8040,
	ERR_PLAYLIST_ADD_ITEMS_FAILED = 8050,
	ERR_PLAYLIST_MOVE_ITEMS_FAILED = 8060,
	ERR_PLAYLIST_DELETE_ITEMS_FAILED = 8070,
	ERR_PLAYLIST_UNKNOWN_INSERT_ITEM_AT = 8080,
	ERR_PLAYLIST_CALCULATE_INDEX_FAILED = 8090,
	ERR_PLAYLIST_NOT_ENTOUGH_PLAYLIST_ITEM_IDS = 8100,
	ERR_PLAYLIST_CREATE_FAILED = 8110,
	ERR_PLAYLIST_INVALID_NAME_LENGTH = 8120,
	ERR_PLAYLIST_INVALID_DESCRIPTIONS_LENGTH = 8130,
	ERR_PLAYLIST_TOO_MANY_PLAYLISTS = 8140,
	ERR_PLAYLIST_TOO_MANY_PLAYLISTITEMS = 8150,

	ERR_RBSC_VIDEO_TOKEN_VIDEO_NOT_FOUND = 9000,
	ERR_RBSC_VIDEO_TOKEN_VIDEO_NOT_AUTHORIZED = 9010,
	ERR_RBSC_VIDEO_TOKEN_API_RATE_LIMIT_HIT = 9020,
	ERR_RBSC_VIDEO_TOKEN_ACTIVE_LIMIT_HIT = 9030,

	ERR_USER_DONATION_UNKNOWN = 10000,
	ERR_USER_DONATION_CAMPAIGN_UNKNOWN = 10010,
	ERR_USER_DONATION_NOT_AUTHORIZED = 10020,
	ERR_USER_DONATION_BETTERPLACE_DONATION_UNKNOWN = 10030,

	//
	ERR_LAST 
};
