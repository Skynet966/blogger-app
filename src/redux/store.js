import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import AppReducer from './app/app.reducer';
import { persistStore } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import BlogSagas from './app/blogs/blogs.sagas';

// const sagaMiddleware = createSagaMiddleware();
const middleware = [logger];
const store = createStore(AppReducer, applyMiddleware(...middleware));
// sagaMiddleware.run(BlogSagas);
export const persistor = persistStore(store);
export default store;
