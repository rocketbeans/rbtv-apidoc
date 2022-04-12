
import { ApiFeature } from "../../../shared/apifeature";

export interface AC_APIFEATURE_ENABLE<T> {
    feature: ApiFeature;
    data?: T;
};

export interface AC_APIFEATURES_ENABLE {
    features: Array<AC_APIFEATURE_ENABLE<any>>;
};

export interface AC_APIFEATURE_DISABLE<T> {
    feature: ApiFeature;
    data?: T
};

export interface AC_APIFEATURES_DISABLE {
    features: Array<AC_APIFEATURE_DISABLE<any>>;
};