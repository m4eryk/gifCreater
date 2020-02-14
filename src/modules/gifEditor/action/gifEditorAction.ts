import {IGifSetting} from '../interface/IGifSetting';
import {CREATE_GIF, SET_GIF_SETTINGS, SET_GIF_URL} from '../constants/gifEditorActionType';
import {ICreateGif, ISetGifSetting, ISetGifUrl} from '../interface/IGifEditorActionTypes';

export const setGifSetting = (setting: IGifSetting): ISetGifSetting => ({
    type: SET_GIF_SETTINGS,
    payload: setting
});

export const setGifUrl = (gifUrl: string): ISetGifUrl => ({
    type: SET_GIF_URL,
    payload: gifUrl
});

export const createGif = (): ICreateGif => ({
    type: CREATE_GIF,
});
