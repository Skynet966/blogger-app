import { combineReducers } from 'redux';
import BlogPostReducer from './blogs/blogs.reducer';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
	key: 'app',
	storage,
	whitelist: ['blogs']
};

const AppReducer = combineReducers({
	blogs: BlogPostReducer
});

export default persistReducer(persistConfig, AppReducer);
