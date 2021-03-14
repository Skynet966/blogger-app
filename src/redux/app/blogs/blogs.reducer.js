import BlogActionTypes from './blogs.types';

const INITIALSTATE = {
	success: '',
	failure: '',
	error: '',
	posts: []
};

const BlogPostReducer = (state = INITIALSTATE, { type, payload }) => {
	switch (type) {
		case BlogActionTypes.CREATE_BLOG_POST:
			return { ...state, posts: [...state.posts, payload] };
		case BlogActionTypes.UPDATE_BLOG_POST:
			const key = state.posts.findIndex(
				post => post.post_id === payload.post_id
			);
			state.posts[key] = payload;
			return { ...state };
		case BlogActionTypes.DELETE_BLOG_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.post_id !== payload)
			};
		default:
			return state;
	}
};

export default BlogPostReducer;
