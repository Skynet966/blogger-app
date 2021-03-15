import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

//Blog Reducer
import BlogPostReducer from './blogs/blogs.reducer';

//Config for the presistance of state in localStorage of browser
const persistConfig = {
	key: 'app',
	storage,
	whitelist: ['blogs']
};

//Helps to combine mulitple Reducers
const AppReducer = combineReducers({
	blogs: BlogPostReducer
});

export default persistReducer(persistConfig, AppReducer);
