import BlogActionTypes from './blogs.types';

//Success Action
export const BlogPostSuccessResponse = successData => ({
	type: BlogActionTypes.BLOG_POST_SUCCESS,
	payload: successData
});
//Failure Action
export const BlogPostFailureResponse = failureData => ({
	type: BlogActionTypes.BLOG_POST_FAILURE,
	payload: failureData
});
//Error Action
export const BlogPostErrorResponse = errorData => ({
	type: BlogActionTypes.BLOG_POST_ERROR,
	payload: errorData
});
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

export const fetchBlog = () => ({
	type: BlogActionTypes.FETCH_BLOG_POSTS
});
