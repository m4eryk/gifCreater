import {IImageDrawState} from '../interface/IImageDrawState';
import {IImageDrawActionType} from '../interface/IImageDrawActionType';
import {DELETE_IMAGE, SET_IMAGE, SET_IMAGE_DRAW_SETTINGS} from '../constants/ImageDrawActionType';

const defaultState: IImageDrawState = {
    drawSettings: {
        backgroundColor: 'white',
        brushColor: 'black',
        brushRadius: 10,
        imgSrc: ''
    },
    image: []
};

export const imageDrawReducer = (state: IImageDrawState = defaultState, action: IImageDrawActionType) => {
    switch (action.type) {
        case SET_IMAGE_DRAW_SETTINGS:
            return {
                ...state,
                drawSettings: {...state.drawSettings, ...action.payload}
            };
        case SET_IMAGE:
            return {
                ...state,
                image: [...state.image, action.payload]
            };
        case DELETE_IMAGE:
            return {
                ...state,
                image: []
            };
        default:
            return state;
    }
};

export default imageDrawReducer;
