import {GIF_EDITOR_REDUCER, IMAGE_DRAW_REDUCER, ROUTER} from '../constants/reducerConstants';
import {IImageDrawState} from '../../modules/imageDraw/interface/IImageDrawState';
import {IGifEditorState} from '../../modules/gifEditor/interface/IGifEditorState';
import {RouterState} from 'connected-react-router';

export interface IStore {
    [IMAGE_DRAW_REDUCER]: IImageDrawState;
    [GIF_EDITOR_REDUCER]: IGifEditorState;
    [ROUTER]: RouterState
}
