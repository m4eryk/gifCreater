import {DELETE_IMAGE, SET_IMAGE, UNDO_IMAGE} from '../constants/ImageViewerActionType';
import {IAction} from '../../../core/interface/IAction';
import {IImage} from '../../imageDraw/interface/IImage';

export type ISetImage = IAction<typeof SET_IMAGE, IImage>;
export type IUndoImage = IAction<typeof UNDO_IMAGE, null>;
export type IDeleteImageArray = IAction<typeof DELETE_IMAGE, null>;

export type IImageViewerActionType = ISetImage | IDeleteImageArray | IUndoImage;
