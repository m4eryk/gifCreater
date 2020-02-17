import {IStore} from '../../../core/interface/IStore';
import {IMAGE_VIEWER_REDUCER} from '../../../core/constants/reducerConstants';

export const getImageArray = (state: IStore) => state[IMAGE_VIEWER_REDUCER].imageArray;
