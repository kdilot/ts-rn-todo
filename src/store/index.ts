import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from '@reducers';
// import { rootSaga } from 'sagas';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers);
// const store = createStore(Reducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

export default store;
