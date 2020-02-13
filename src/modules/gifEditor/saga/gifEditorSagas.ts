import {takeLatest, put,} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {CREATE_GIF} from '../constants/gifEditorActionType';
import {ROUTES} from '../../../core/constants/routeConstants';
import {createGif} from '../utils/createGifUtils';
import {IGifEditorActionType} from '../interface/IGifEditorActionTypes';
import {IImage} from '../../imageDraw/interface/IImage';

function* callCreateGif({ payload }: IGifEditorActionType) {
    const gifUrl = createGif(payload as IImage[]);

    console.log(gifUrl);
    yield put(push(ROUTES.GIF_EDITOR));
}

export function* createGifRootSaga() {
    yield takeLatest(CREATE_GIF, callCreateGif);
}
