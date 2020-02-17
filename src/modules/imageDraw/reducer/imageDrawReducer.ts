import {IImageDrawState} from '../interface/IImageDrawState';
import {IImageDrawActionType} from '../interface/IImageDrawActionType';
import {
    DELETE_DRAW_ITEMS,
    ERASE_DRAW_ITEM,
    SET_DRAW_ITEM,
    SET_IMAGE_DRAW_SETTINGS,
    SET_PAST_BRUSH_COLOR,
    UNDO_DRAW_ITEM
} from '../constants/ImageDrawActionType';

const defaultState: IImageDrawState = {
    drawSettings: {
        backgroundColor: 'white',
        brushColor: 'black',
        brushRadius: 10,
    },
    pastBrushColor: '',
    isErase: false,
    drawItems: [],
};

export const imageDrawReducer = (state: IImageDrawState = defaultState, action: IImageDrawActionType) => {
    switch (action.type) {
        case SET_IMAGE_DRAW_SETTINGS:
            return {
                ...state,
                drawSettings: {...state.drawSettings, ...action.payload}
            };
        case SET_DRAW_ITEM:
            return {
                ...state,
                drawItems: [...state.drawItems, action.payload]
            };
        case UNDO_DRAW_ITEM:
            return {
                ...state,
                drawItems: [...state.drawItems.slice(0, -4)]
            };
        case ERASE_DRAW_ITEM:
            return {
                ...state,
                isErase: !state.isErase
            };
        case SET_PAST_BRUSH_COLOR:
            return {
                ...state,
                pastBrushColor: action.payload
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
