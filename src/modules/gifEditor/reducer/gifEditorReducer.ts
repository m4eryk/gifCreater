import {SET_GIF_SETTINGS, SET_GIF_URL} from '../constants/gifEditorActionType';
import {IGifEditorActionType} from '../interface/IGifEditorActionTypes';
import {IGifEditorState} from '../interface/IGifEditorState';

const defaultState: IGifEditorState = {
    gifSetting: {
        delay: 500,
        quality: 10,
        repeat: false
    },
    gifUrl: ''
};

export const gifEditorReducer = (state: IGifEditorState = defaultState, action: IGifEditorActionType) => {
    switch (action.type) {
        case SET_GIF_SETTINGS:
            return {
                ...state,
                gifSetting: {...state.gifSetting, ...action.payload}
            };
        case SET_GIF_URL:
            return {
                ...state,
                gifUrl: action.payload
            };
        default:
            return state;
    }
};

export default gifEditorReducer;
