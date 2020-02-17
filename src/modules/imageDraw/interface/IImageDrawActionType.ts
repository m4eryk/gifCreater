import {
    SET_DRAW_ITEM,
    SET_IMAGE_DRAW_SETTINGS,
    DELETE_DRAW_ITEMS,
    UNDO_DRAW_ITEM,
    ERASE_DRAW_ITEM,
    SET_PAST_BRUSH_COLOR
} from '../constants/ImageDrawActionType';
import {IAction} from '../../../core/interface/IAction';
import {IDrawSettings} from './IDrawSettings';
import {IDrawItem} from './IDrawItem';

export type ISetImageDrawSettings = IAction<typeof SET_IMAGE_DRAW_SETTINGS, IDrawSettings>;
export type ISetDrawItem = IAction<typeof SET_DRAW_ITEM, IDrawItem>;
export type ISetPastBrushColor = IAction<typeof SET_PAST_BRUSH_COLOR, string>;
export type IEraseDrawItem = IAction<typeof ERASE_DRAW_ITEM, null>;
export type IUndoDrawItem = IAction<typeof UNDO_DRAW_ITEM, null>;
export type IDeleteDrawItems = IAction<typeof DELETE_DRAW_ITEMS, null>;

export type IImageDrawActionType =
    | ISetImageDrawSettings
    | ISetDrawItem
    | IDeleteDrawItems
    | IUndoDrawItem
    | IEraseDrawItem
    | ISetPastBrushColor;
