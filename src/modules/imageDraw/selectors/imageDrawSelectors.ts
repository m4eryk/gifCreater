import {IStore} from '../../../core/interface/IStore';
import {IMAGE_DRAW_REDUCER} from '../../../core/constants/reducerConstants';

export const getImageDrawSettings = (state: IStore) => state[IMAGE_DRAW_REDUCER].drawSettings;
export const getImageArray = (state: IStore) => state[IMAGE_DRAW_REDUCER].imageArray;
export const getDrawItems = (state: IStore) => state[IMAGE_DRAW_REDUCER].drawItems;
