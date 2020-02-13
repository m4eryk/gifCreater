import {CREATE_GIF, SET_GIF_SETTINGS} from '../constants/gifEditorActionType';
import {IGifEditorActionType} from '../interface/IGifEditorActionTypes';
import {IGifEditorState} from '../interface/IGifEditorState';
import {createGif} from '../utils/createGifUtils';
import {IImage} from '../../imageDraw/interface/IImage';

const defaultState: IGifEditorState = {
    gifSetting: {
        delay: 500,
        quality: 10,
        repeat: "on"
    },
    gifUrl: ''
};

export const gifEditorReducer = (state: IGifEditorState = defaultState, action: IGifEditorActionType) => {
    switch (action.type) {
        case CREATE_GIF:
            return {
                ...state,
                gifUrl: createGif(action.payload as IImage[], state.gifSetting)
            };
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
