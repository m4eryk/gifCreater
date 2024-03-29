import {IStore} from '../../../core/interface/IStore';
import {GIF_EDITOR_REDUCER} from '../../../core/constants/reducerConstants';

export const getGifUrl = (state: IStore) => state[GIF_EDITOR_REDUCER].gifUrl;
export const getGifSetting = (state: IStore) => state[GIF_EDITOR_REDUCER].gifSetting;
