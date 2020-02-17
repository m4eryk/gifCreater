import {takeLatest, put, select} from 'redux-saga/effects';
import {ERASE_DRAW_ITEM} from '../constants/ImageDrawActionType';
import {setImageDrawSettings, setPastBrushColor} from '../action/imagerDrawAction';
import {getImageDrawSettings, getPastBrushColor, isErase} from '../selectors/imageDrawSelectors';

function* watchEraseDrawItem() {
    const erase = yield select(isErase);

    if (erase) {
        const { brushColor } = yield select(getImageDrawSettings);

        yield put(setPastBrushColor(brushColor));
        yield put(setImageDrawSettings({brushColor: 'white'}));
    } else {
        const pastBrushColor = yield select(getPastBrushColor);

        yield put(setImageDrawSettings({brushColor: pastBrushColor}));
    }
}

export function* imageDrawRootSaga() {
    yield takeLatest(ERASE_DRAW_ITEM, watchEraseDrawItem);
}
