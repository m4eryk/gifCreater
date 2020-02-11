import {CREATE_GIF, SET_GIF_SETTINGS, SET_GIF_URL} from '../constants/gifEditorActionType';
import {IGifEditorActionType} from '../interface/IGifEditorActionTypes';
import {IGifEditorState} from '../interface/IGifEditorState';
import {createGif} from '../utils/createGifUtils';
import {IImage} from '../../imageDraw/interface/IImage';

const defaultState: IGifEditorState = {
    gifSetting: {
        delay: 1000,
        quality: 10,
        repeat: true
    },
    gifUrl: '',
    gifData: ''
};

export const gifEditorReducer = (state: IGifEditorState = defaultState, action: IGifEditorActionType) => {
    switch (action.type) {
        case CREATE_GIF:
            return {
                ...state,
                gifData: createGif(action.payload as IImage[])
            };
        case SET_GIF_URL: {
            return {
                ...state,
                gifUrl: ''
            }
        }
        case SET_GIF_SETTINGS:
            return {
                ...state,
                gifSetting: {...state.gifSetting, ...action.payload}
            };
        default:
            return state;
    }
};

export default gifEditorReducer;
