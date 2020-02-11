import {DELETE_IMAGE, SET_IMAGE, SET_IMAGE_DRAW_SETTINGS} from '../constants/ImageDrawActionType';
import {IAction} from '../../../core/interface/IAction';
import {IDrawSettings} from './IDrawSettings';
import {IImage} from './IImage';

export type ISetImage = IAction<typeof SET_IMAGE, IImage>;
export type ISetImageDrawSettings = IAction<typeof SET_IMAGE_DRAW_SETTINGS, IDrawSettings>;
export type IDeleteImage = IAction<typeof DELETE_IMAGE, null>

export type IImageDrawActionType = ISetImage | ISetImageDrawSettings | IDeleteImage;
