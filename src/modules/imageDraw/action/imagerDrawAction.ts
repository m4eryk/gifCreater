import {IDrawSettings} from '../interface/IDrawSettings';
import {
    DELETE_DRAW_ITEMS,
    DELETE_IMAGE,
    SET_DRAW_ITEM,
    SET_IMAGE,
    SET_IMAGE_DRAW_SETTINGS
} from '../constants/ImageDrawActionType';
import {
    IDeleteDrawItems,
    IDeleteImageArray,
    ISetDrawItem,
    ISetImage,
    ISetImageDrawSettings
} from '../interface/IImageDrawActionType';
import {IImage} from '../interface/IImage';
import {IDrawItem} from '../interface/IDrawItem';

export const setImageDrawSettings = (setting: IDrawSettings): ISetImageDrawSettings => ({
    type: SET_IMAGE_DRAW_SETTINGS,
    payload: setting
});

export const setImage = (image: IImage): ISetImage => ({
    type: SET_IMAGE,
    payload: image
});

export const setDrawItems = (drawItem: IDrawItem): ISetDrawItem => ({
    type: SET_DRAW_ITEM,
    payload: drawItem
});

export const deleteDrawItems = (): IDeleteDrawItems => ({
    type: DELETE_DRAW_ITEMS,
});

export const deleteImageArray = (): IDeleteImageArray => ({
    type: DELETE_IMAGE
});
