import {combineReducers} from 'redux';
import imageDrawReducer from '../../modules/imageDraw/reducer/imageDrawReducer';
import gifEditorReducer from '../../modules/gifEditor/reducer/gifEditorReducer';
import {GIF_EDITOR_REDUCER, IMAGE_DRAW_REDUCER} from '../constants/reducerConstants';

export default combineReducers({
    [IMAGE_DRAW_REDUCER]: imageDrawReducer,
    [GIF_EDITOR_REDUCER]: gifEditorReducer
});
