import {IDrawSettings} from '../interface/IDrawSettings';
import {
    DELETE_DRAW_ITEMS,
    ERASE_DRAW_ITEM,
    SET_DRAW_ITEM,
    SET_IMAGE_DRAW_SETTINGS,
    SET_PAST_BRUSH_COLOR,
    UNDO_DRAW_ITEM
} from '../constants/ImageDrawActionType';
import {
    IDeleteDrawItems,
    IEraseDrawItem,
    ISetDrawItem,
    ISetImageDrawSettings,
    ISetPastBrushColor,
    IUndoDrawItem
} from '../interface/IImageDrawActionType';
import {IDrawItem} from '../interface/IDrawItem';

export const setImageDrawSettings = (setting: IDrawSettings): ISetImageDrawSettings => ({
    type: SET_IMAGE_DRAW_SETTINGS,
    payload: setting
});

export const setDrawItems = (drawItem: IDrawItem): ISetDrawItem => ({
    type: SET_DRAW_ITEM,
    payload: drawItem
});

export const setPastBrushColor = (color: string): ISetPastBrushColor => ({
    type: SET_PAST_BRUSH_COLOR,
    payload: color
});

export const undoDrawItems = (): IUndoDrawItem => ({
    type: UNDO_DRAW_ITEM,
});

export const eraseDrawItems = (): IEraseDrawItem => ({
   type: ERASE_DRAW_ITEM,
});

export const deleteDrawItems = (): IDeleteDrawItems => ({
    type: DELETE_DRAW_ITEMS,
});
