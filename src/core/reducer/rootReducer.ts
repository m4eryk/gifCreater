import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import imageDrawReducer from '../../modules/imageDraw/reducer/imageDrawReducer';
import gifEditorReducer from '../../modules/gifEditor/reducer/gifEditorReducer';
import {GIF_EDITOR_REDUCER, IMAGE_DRAW_REDUCER, ROUTER} from '../constants/reducerConstants';

const rootReducer = (history: History) =>  combineReducers({
    [IMAGE_DRAW_REDUCER]: imageDrawReducer,
    [GIF_EDITOR_REDUCER]: gifEditorReducer,
    [ROUTER]: connectRouter(history)
});

export default rootReducer;
