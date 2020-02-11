import {takeLatest, put, call} from 'redux-saga/effects';
import {push, replace} from 'react-router-redux';
import {createGifUrl, setGifUrl} from '../action/gifEditorAction';
import {CREATE_GIF} from '../constants/gifEditorActionType';
import {ROUTES} from '../../../core/constants/routeConstants';

function* callCreateGif() {
    yield put(setGifUrl(''));
    yield put(push(ROUTES.GIF_EDITOR));
}

export function* createGifRootSaga() {
    yield takeLatest(CREATE_GIF, callCreateGif);
}
