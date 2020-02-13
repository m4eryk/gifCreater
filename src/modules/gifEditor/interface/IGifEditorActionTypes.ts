import {IAction} from '../../../core/interface/IAction';
import {CREATE_GIF, SET_GIF_SETTINGS, SET_GIF_URL} from '../constants/gifEditorActionType';
import {IGifSetting} from './IGifSetting';
import {IImage} from '../../imageDraw/interface/IImage';

export type ISetGifSetting = IAction<typeof SET_GIF_SETTINGS, IGifSetting>;
export type ICreateGif = IAction<typeof CREATE_GIF, IImage[]>;
export type ISetGifUrl = IAction<typeof SET_GIF_URL, string>;

export type IGifEditorActionType = ISetGifSetting | ICreateGif | ISetGifUrl;
