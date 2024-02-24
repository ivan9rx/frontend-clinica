import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMidleware = createSagaMiddleware();

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
? composeWithDevTools(applyMiddleware(sagaMidleware))
: applyMiddleware(sagaMidleware)
);

sagaMidleware.run(rootSaga);

export default store;
