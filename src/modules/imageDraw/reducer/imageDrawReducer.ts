import {IImageDrawState} from '../interface/IImageDrawState';
import {IImageDrawActionType} from '../interface/IImageDrawActionType';
import {
    DELETE_DRAW_ITEMS,
    DELETE_IMAGE,
    SET_DRAW_ITEM,
    SET_IMAGE,
    SET_IMAGE_DRAW_SETTINGS, UNDO_DRAW_ITEM
} from '../constants/ImageDrawActionType';

const defaultState: IImageDrawState = {
    drawSettings: {
        backgroundColor: 'white',
        brushColor: 'black',
        brushRadius: 10,
    },
    drawItems: [],
    imageArray: []
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
                imageArray: [...state.imageArray, action.payload]
            };
        case SET_DRAW_ITEM:
            return {
                ...state,
                drawItems: [...state.drawItems, action.payload]
            };
        case UNDO_DRAW_ITEM:
            return {
                ...state,
                drawItems: [...state.drawItems.slice(0, -4) ]
            };
        case DELETE_IMAGE:
            return {
                ...state,
                imageArray: []
            };
        case DELETE_DRAW_ITEMS:
            return {
                ...state,
                drawItems: []
            };
        default:
            return state;
    }
};

export default imageDrawReducer;
