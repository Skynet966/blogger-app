import { takeLatest, put, call, all } from 'redux-saga/effects';
import { BlogPostErrorResponse } from './blogs.actions';
import BlogActionTypes from './blogs.types';

function* addNewBlogtoFile({ payload }) {
	try {
		console.log(payload);
	} catch (error) {
		yield put(BlogPostErrorResponse(error));
	}
}

function* onCreateBlogPost() {
	yield takeLatest(BlogActionTypes.CREATE_BLOG_POST, addNewBlogtoFile);
}

export default function* BlogSagas() {
	yield all([call(onCreateBlogPost)]);
}
