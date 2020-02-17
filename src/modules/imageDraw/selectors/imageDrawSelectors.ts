import {IStore} from '../../../core/interface/IStore';
import {IMAGE_DRAW_REDUCER} from '../../../core/constants/reducerConstants';

export const getImageDrawSettings = (state: IStore) => state[IMAGE_DRAW_REDUCER].drawSettings;
export const getDrawItems = (state: IStore) => state[IMAGE_DRAW_REDUCER].drawItems;
export const getPastBrushColor = (state: IStore) => state[IMAGE_DRAW_REDUCER].pastBrushColor;
export const isErase = (state: IStore) => state[IMAGE_DRAW_REDUCER].isErase;
