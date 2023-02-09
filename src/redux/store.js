import rootSaga from './rootsaga'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)

export default store;