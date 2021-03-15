import BlogActionTypes from './blogs.types';

//create a new blog using this action
export const createBlog = postData => ({
	type: BlogActionTypes.CREATE_BLOG_POST,
	payload: postData
});

//delete a blog by passing the blog post id into action
export const deleteBlog = postId => ({
	type: BlogActionTypes.DELETE_BLOG_POST,
	payload: postId
});

//update the blog post
export const updateBlog = postData => ({
	type: BlogActionTypes.UPDATE_BLOG_POST,
	payload: postData
});

//Increase the like of a blog post by taking id
export const likeBlog = postId => ({
	type: BlogActionTypes.LIKE_BLOG_POST,
	payload: postId
});
