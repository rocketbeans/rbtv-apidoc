


export const enum errorCode {
	ERR_NO_ERROR = 0,

	/** GENERIC ERRORS */
	ERR_MISSING_PARAMETERS = 1000,			// Missing Parameters for the specified api endpoint 
	ERR_INVALID_BODYTYPE = 1001,			// Invalid Body Type; used by put / post handlers for parameter verification
	ERR_WRONG_PARAMETER_TYPE = 1002,		// Wrong Parameter type supplied, for example field must be array, string given.
	ERR_INVALID_SORT_TYPE = 1003,			// Unsupported sortBy / sort parameters
	ERR_UNSUPPORTED_SORTING = 1004,	
	ERR_UNEXPECTED_ARGUMENT = 1005,			// Unexpected Range etc
	ERR_MISSING_FEATURE = 1006,				// Missing Feature / Unimplemented Code Path
	ERR_UNEXPECTED = 1007,					// Unexpected Error; such as race-conditions upon registration (email check/namecheck -> final insert conflict etc.. )
	ERR_PAGINATION_NEEDED = 1008,			// The requested action requires pagination parameters set (offset/limit)
	ERR_PAGINATION_LIMIT_EXCEEDED = 1009,	// The Requested Limits exceeds the Actions maximum supported limit
	ERR_PAGINATION_NO_MORE_DATA = 1010,		// The requested action cannot provide any more data for the requested offset.
	ERR_ACTION_REQUIRES_EMAIL_SET = 1011,	// The requested action requires a valid email set
	ERR_RECAPTCHA_INVALID = 1012,			// Used to refuse recaptcha challenge


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


	/** Bohne Erors (Staffinfo) */
	ERR_BOHNE_NOT_FOUND = 2201,			// Bohne Not found.
	ERR_BOHNE_INVALID_ROLE = 2202,		// Unsupported Role.


	/** Image Uploader Errors */
	ERR_IMAGEUPLOAD_INVALID_IMAGE = 2301,		// Invalid or Missing Image
	ERR_IMAGEUPLOAD_INVALID_TYPE = 2302,		// Invalid or unknown type
	ERR_IMAGEUPLOAD_TOOLARGE = 2303,			// Uploaded file exceeds types maximum allowed filesize
	ERR_IMAGEUPLOAD_INVALID_DIMENSIONS = 2304,	// Imagesize Invalid (min/max size)
	ERR_IMAGEUPLOAD_FAIL_TEMP = 2305,			// Upload failed, failed to store entity (already pending temp images for this type)

	/** Blog Errors */
	ERR_BLOG_AUTHOR_NOT_FOUND = 2401,			// The given Author UserID is not found / not a bohne
	ERR_BLOG_POST_NOT_FOUND = 2402,				// Blog Post not found
	ERR_BLOG_UNSUPPORTED_FEED_TYPE = 2403,		// Unsupported Feed Type (RSS/ATOM ETC)
	ERR_BLOG_CATEGORY_NOT_FOUND = 2404,			// Requested Blog Category not found
	ERR_BLOG_CATEGORY_INVALID = 2405,			// Requested Blog Category does not match the requirements
	ERR_BLOG_CATEGORY_ALREADY_EXISTS = 2406,	// Requested Blog Category already exists
	ERR_BLOG_CATEGORY_CONTAINS_POSTS = 2407,	// Blog Category contains posts and cannot be deleted

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

	/** Group Errors */
	ERR_GROUP_NOT_FOUND = 2701,			// Unknown group (id)
	ERR_GROUP_PERM_UNASSIGNABLE = 2702, // Tried to assign an unassignable permission (see message for details)
	ERR_GROUP_NAME_IN_USE = 2703,		// The given Name is already in use
	ERR_GROUP_NAME_IS_CONST = 2704,		// Group name cannot be changed

	/** Schedule Errors */
	ERR_SCHEDULE_INVALID_RANGE = 2801,	// The given range between start & end is not supported

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

	/** Search Errors */
	ERR_SEARCH_TERM_TOO_SHORT = 3201,	// Search term was too short

	/** Subscription Errors */
	ERR_SUBSCRIPTION_INVALID_TYPE = 3301,	// Invalid type (in this context)
	ERR_SUBSCRIPTION_IMPOSSIBLE = 3302,		// The given Entity can't be subscribed
	ERR_SUBSCRIPTION_FAILED = 3303,			// Failed to get subscriptions
	ERR_SUBSCRIPTION_NOT_SUBSCRIBED = 3304,	// The Requested type/id is not subscribed

	/** Simple Shop Errors */
	ERR_SIMPLESHOP_ITEM_NOT_FOUND = 3401,	// The requested Simple Shop Item does not exist


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


	// 
	ERR_LAST 
};


