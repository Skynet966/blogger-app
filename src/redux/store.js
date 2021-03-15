import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

//Root reducer named as AppReducer that can holds all reducers
import AppReducer from './app/app.reducer';

// create store by passing App reducer and config the logger;
// middleware for logging all redux state change actions
const store = createStore(AppReducer, applyMiddleware(logger));

//export persistor config referece
export const persistor = persistStore(store);

export default store;
