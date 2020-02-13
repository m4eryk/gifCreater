import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {createGifRootSaga} from '../modules/gifEditor/saga/gifEditorSagas';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {history} from './utils/historyUtils';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer(history), applyMiddleware(sagaMiddleware, routerMiddleware(history)));

sagaMiddleware.run(createGifRootSaga);

store.subscribe(() => console.log(store.getState()));

interface Props {
    children?: React.ReactNode;
}

const Store: React.FC<Props> = ({children}: Props) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>{children}</ConnectedRouter>
        </Provider>
    );
};

export default Store;

