import {IGifSetting} from '../interface/IGifSetting';
import {CREATE_GIF, SET_GIF_SETTINGS} from '../constants/gifEditorActionType';
import {ICreateGif, ISetGifSetting} from '../interface/IGifEditorActionTypes';
import {IImage} from '../../imageDraw/interface/IImage';

export const setGifSetting = (setting: IGifSetting): ISetGifSetting => ({
    type: SET_GIF_SETTINGS,
    payload: setting
});

export const createGifUrl = (imageArray: IImage[]): ICreateGif => ({
    type: CREATE_GIF,
    payload: imageArray
});
