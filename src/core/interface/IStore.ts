import {GIF_EDITOR_REDUCER, IMAGE_DRAW_REDUCER} from '../constants/reducerConstants';
import {IImageDrawState} from '../../modules/imageDraw/interface/IImageDrawState';
import {IGifEditorState} from '../../modules/gifEditor/interface/IGifEditorState';

export interface IStore {
    [IMAGE_DRAW_REDUCER]: IImageDrawState;
    [GIF_EDITOR_REDUCER]: IGifEditorState
}
