import {
    DELETE_IMAGE,
    SET_DRAW_ITEM,
    SET_IMAGE,
    SET_IMAGE_DRAW_SETTINGS,
    DELETE_DRAW_ITEMS
} from '../constants/ImageDrawActionType';
import {IAction} from '../../../core/interface/IAction';
import {IDrawSettings} from './IDrawSettings';
import {IDrawItem} from './IDrawItem';
import {IImage} from './IImage';

export type ISetImage = IAction<typeof SET_IMAGE, IImage>;
export type ISetImageDrawSettings = IAction<typeof SET_IMAGE_DRAW_SETTINGS, IDrawSettings>;
export type ISetDrawItem = IAction<typeof SET_DRAW_ITEM, IDrawItem>;
export type IDeleteDrawItems = IAction<typeof DELETE_DRAW_ITEMS, null>;
export type IDeleteImageArray = IAction<typeof DELETE_IMAGE, null>;

export type IImageDrawActionType =
    ISetImage
    | ISetImageDrawSettings
    | IDeleteImageArray
    | ISetDrawItem
    | IDeleteDrawItems;
