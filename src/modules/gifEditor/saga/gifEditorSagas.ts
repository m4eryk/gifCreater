import {takeLatest, put,} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {CREATE_GIF} from '../constants/gifEditorActionType';
import {ROUTES} from '../../../core/constants/routeConstants';

function* callCreateGif() {
    yield put(push(ROUTES.GIF_EDITOR));
}

export function* createGifRootSaga() {
    yield takeLatest(CREATE_GIF, callCreateGif);
}
