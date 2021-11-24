export type tChangedUserDataType =  'email' |   // Own E-Mail address changed, value contains new email address
                                    'dummy';    // Dummy - not in use - test type

export interface AC_USERDATA_CHANGED {
    type: tChangedUserDataType;
    value: any | null;  // may be null depending on type
};