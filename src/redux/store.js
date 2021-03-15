import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';

//Root reducer named as AppReducer that can holds all reducers
import AppReducer from './app/app.reducer';

// create store by passing App reducer and config the logger;
// middleware for logging all redux state change actions
// applyMiddleware(logger); //Apply in development mode for logging
const store = createStore(AppReducer);

//export persistor config referece
export const persistor = persistStore(store);

export default store;
