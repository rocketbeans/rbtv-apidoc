
// Data for Error ERR_TERMS_NOT_ACCEPTED
export interface TermsErrorData {
    needsSignPrivacyPolicy: boolean;     // if set true, the requesting user needs to sign our new Privacy Policy ( => https://rocketbeans.tv/datenschutz )
    needsSignTerms: boolean;             // if set true, the requesting user needs to sign our new Terms of Service ( => https://rocketbeans.tv/agb )
};


export interface ITermsVersion {
    terms: Date;
    privacyPolicy: Date;
};
