import {fork, all} from 'redux-saga/effects';
import {createGifRootSaga} from '../../modules/gifEditor/saga/gifEditorSagas';
import {imageDrawRootSaga} from '../../modules/imageDraw/saga/imageDrawSagas';

export default function* rootSaga() {
    yield all([
        fork(createGifRootSaga),
        fork(imageDrawRootSaga)
    ]);
}
