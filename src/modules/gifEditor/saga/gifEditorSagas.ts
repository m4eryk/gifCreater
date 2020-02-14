import {takeLatest, put, select} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {CREATE_GIF, SET_GIF_SETTINGS} from '../constants/gifEditorActionType';
import {ROUTES} from '../../../core/constants/routeConstants';
import {createGif} from '../utils/createGifUtils';
import {IGifEditorActionType, ISetGifSetting} from '../interface/IGifEditorActionTypes';
import {IImage} from '../../imageDraw/interface/IImage';
import {setGifUrl} from '../action/gifEditorAction';
import {getImageArray} from '../../imageDraw/selectors/imageDrawSelectors';

function* callCreateGif({payload}: IGifEditorActionType) {
    const imageArray: IImage[] = yield select(getImageArray);
    const gifUrl = createGif(imageArray);

    yield put(setGifUrl(gifUrl));
    yield put(push(ROUTES.GIF_EDITOR));
}

function* watchGifSetting({ payload }: ISetGifSetting) {
    const imageArray: IImage[] = yield select(getImageArray);
    const gifUrl = createGif(imageArray, payload);

    yield put(setGifUrl(gifUrl));
}

export function* createGifRootSaga() {
    yield takeLatest(CREATE_GIF, callCreateGif);
    yield takeLatest(SET_GIF_SETTINGS, watchGifSetting);
}
