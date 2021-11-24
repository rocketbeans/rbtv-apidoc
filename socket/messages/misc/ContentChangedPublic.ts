import { IHypescoreGameScores } from "../../../response/hypescore";

export type tContentChangedType = 'hypescore' | 'frontendtheme';

export interface AC_CONTENT_CHANGED<T> {
    type: tContentChangedType;
    data?: T;
};

export interface IHypescoreChangedEvent {
    id: number; // gameid
    scores: IHypescoreGameScores
};

export interface IFrontendThemeChangedEvent {
    pageTheme: string | null;   // new page theme
};
