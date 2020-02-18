import {IImage} from '../../imageDraw/interface/IImage';
import {IDeleteImageArray, ISetImage, ISortImageArray, IUndoImage} from '../interface/IImageViewerActionType';
import {DELETE_IMAGE, SET_IMAGE} from '../../imageDraw/constants/ImageDrawActionType';
import {SORT_IMAGE, UNDO_IMAGE} from '../constants/ImageViewerActionType';

export const setImage = (image: IImage): ISetImage => ({
    type: SET_IMAGE,
    payload: image
});

export const undoImage = (): IUndoImage => ({
    type: UNDO_IMAGE
});

export const deleteImageArray = (): IDeleteImageArray => ({
    type: DELETE_IMAGE
});

export const sortImageArray = (newImageArray: IImage[]): ISortImageArray => ({
    type: SORT_IMAGE,
    payload: newImageArray
});
