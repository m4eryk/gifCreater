import {IGifSetting} from '../interface/IGifSetting';
import {CREATE_GIF, SET_GIF_SETTINGS, SET_GIF_URL} from '../constants/gifEditorActionType';
import {ICreateGif, ISetGifSetting, ISetGifUrl} from '../interface/IGifEditorActionTypes';
import {IImage} from '../../imageDraw/interface/IImage';

export const setGifSetting = (setting: IGifSetting): ISetGifSetting => ({
    type: SET_GIF_SETTINGS,
    payload: setting
});

export const createGifUrl = (imageArray: IImage[]): ICreateGif => ({
    type: CREATE_GIF,
    payload: imageArray
});

export const setGifUrl = (gifUrl: string): ISetGifUrl => ({
    type: SET_GIF_URL,
    payload: gifUrl
});

