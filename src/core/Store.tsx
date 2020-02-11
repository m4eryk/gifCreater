import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {createGifRootSaga} from '../modules/gifEditor/saga/gifEditorSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(createGifRootSaga);

store.subscribe(() => console.log(store.getState()));


interface Props {
    children?: React.ReactNode;
}

const Store: React.FC<Props> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Store;

