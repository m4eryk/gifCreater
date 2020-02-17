import {GIF_EDITOR_REDUCER, IMAGE_DRAW_REDUCER, IMAGE_VIEWER_REDUCER, ROUTER} from '../constants/reducerConstants';
import {IImageDrawState} from '../../modules/imageDraw/interface/IImageDrawState';
import {IGifEditorState} from '../../modules/gifEditor/interface/IGifEditorState';
import {RouterState} from 'connected-react-router';
import {IImageViewerState} from '../../modules/ImageViewer/interface/IImageViewerState';

export interface IStore {
    [IMAGE_DRAW_REDUCER]: IImageDrawState;
    [GIF_EDITOR_REDUCER]: IGifEditorState;
    [IMAGE_VIEWER_REDUCER]: IImageViewerState;
    [ROUTER]: RouterState
}
