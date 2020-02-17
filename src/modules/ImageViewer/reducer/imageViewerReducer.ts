import {IImageViewerState} from '../interface/IImageViewerState';
import {IImageViewerActionType} from '../interface/IImageViewerActionType';
import {DELETE_IMAGE, SET_IMAGE, UNDO_IMAGE} from '../constants/ImageViewerActionType';

const defaultState: IImageViewerState = {
    imageArray: []
};

export const imageViewerReducer = (state: IImageViewerState = defaultState, action: IImageViewerActionType) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                ...state,
                imageArray: [...state.imageArray, action.payload]
            };
        case DELETE_IMAGE:
            return {
                ...state,
                imageArray: []
            };
        case UNDO_IMAGE:
            return {
                ...state,
                imageArray: [...state.imageArray.slice(0, -1)]
            };
        default:
            return state;
    }
};

export default imageViewerReducer;
