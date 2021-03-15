import BlogActionTypes from './blogs.types';

//create blog post by getting all data of blog into postData
export const createBlog = postData => ({
	type: BlogActionTypes.CREATE_BLOG_POST,
	payload: postData
});

export const deleteBlog = postId => ({
	type: BlogActionTypes.DELETE_BLOG_POST,
	payload: postId
});

export const updateBlog = postData => ({
	type: BlogActionTypes.UPDATE_BLOG_POST,
	payload: postData
});

export const likeBlog = postId => ({
	type: BlogActionTypes.LIKE_BLOG_POST,
	payload: postId
});
