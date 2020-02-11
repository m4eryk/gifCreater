import {IDrawSettings} from '../interface/IDrawSettings';
import {DELETE_IMAGE, SET_IMAGE, SET_IMAGE_DRAW_SETTINGS} from '../constants/ImageDrawActionType';
import {IDeleteImage, ISetImage, ISetImageDrawSettings} from '../interface/IImageDrawActionType';
import {IImage} from '../interface/IImage';

export const setImageDrawSettings = (setting: IDrawSettings): ISetImageDrawSettings => ({
    type: SET_IMAGE_DRAW_SETTINGS,
    payload: setting
});

export const setImage = (image: IImage): ISetImage => ({
    type: SET_IMAGE,
    payload: image
});

export const deleteImage = (): IDeleteImage => ({
    type: DELETE_IMAGE
});
