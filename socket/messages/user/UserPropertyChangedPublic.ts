export interface AC_USERPROPERTY_CHANGED {
    key: string;
    value: any | null; // null value will be pushed upon deletion
};