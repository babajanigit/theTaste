import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import appReducer from './appReducers'

const comoposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, comoposeEnhancers(applyMiddleware()));
const persistor = persistStore(store);

export { store,persistor };