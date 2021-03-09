import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const DEFAULT_STATE = {
	posts: [],
	messages: ''
};

const AppReducer = (state = DEFAULT_STATE, { type, payload }) => {
	switch (type) {
		case 'HEAVEY_DRIVER':
			return { ...state, message: 'thum to bday heavy driver niklay bhai' };
		default:
			return { ...state };
	}
};

const store = createStore(AppReducer, applyMiddleware(logger));
export default store;
