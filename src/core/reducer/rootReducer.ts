import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import imageDrawReducer from '../../modules/imageDraw/reducer/imageDrawReducer';
import gifEditorReducer from '../../modules/gifEditor/reducer/gifEditorReducer';
import {GIF_EDITOR_REDUCER, IMAGE_DRAW_REDUCER, ROUTER, IMAGE_VIEWER_REDUCER} from '../constants/reducerConstants';
import imageViewerReducer from '../../modules/ImageViewer/reducer/imageViewerReducer';

const rootReducer = (history: History) =>  combineReducers({
    [IMAGE_DRAW_REDUCER]: imageDrawReducer,
    [GIF_EDITOR_REDUCER]: gifEditorReducer,
    [IMAGE_VIEWER_REDUCER] : imageViewerReducer,
    [ROUTER]: connectRouter(history)
});

export default rootReducer;
