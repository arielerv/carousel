import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancer = applyMiddleware(...middlewares);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
