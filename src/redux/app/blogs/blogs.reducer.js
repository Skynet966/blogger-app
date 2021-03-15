import BlogActionTypes from './blogs.types';

const INITIALSTATE = {
	changes: true,
	posts: []
};

const BlogPostReducer = (state = INITIALSTATE, { type, payload }) => {
	let key;
	switch (type) {
		case BlogActionTypes.CREATE_BLOG_POST:
			return { ...state, posts: [...state.posts, payload] };
		case BlogActionTypes.UPDATE_BLOG_POST:
			key = state.posts.findIndex(post => post.post_id === payload.post_id);
			state.posts[key] = payload;
			return { ...state };
		case BlogActionTypes.DELETE_BLOG_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.post_id !== payload)
			};
		case BlogActionTypes.LIKE_BLOG_POST:
			key = state.posts.findIndex(post => post.post_id === payload);
			state.posts[key].likes++;
			return { ...state, changes: !state.changes };
		default:
			return state;
	}
};

export default BlogPostReducer;
