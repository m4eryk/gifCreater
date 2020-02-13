import {IStore} from '../interface/IStore';
import {ROUTER} from '../constants/reducerConstants';

export const getLocation = (store: IStore) => store[ROUTER].location;
