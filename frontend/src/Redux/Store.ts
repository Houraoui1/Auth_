import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/Rootsaga";
import rootReducer from "./RootReducers";

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

///
