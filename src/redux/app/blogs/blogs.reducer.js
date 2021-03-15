import BlogActionTypes from './blogs.types';

//Initial or default state of app
const INITIALSTATE = {
	changes: true,
	posts: []
};

//handle the actions that can be dispatched by components
const BlogPostReducer = (state = INITIALSTATE, { type, payload }) => {
	let key;
	switch (type) {
		//create a new blog post
		case BlogActionTypes.CREATE_BLOG_POST:
			return { ...state, posts: [...state.posts, payload] };

		//update blog post data
		case BlogActionTypes.UPDATE_BLOG_POST:
			key = state.posts.findIndex(post => post.post_id === payload.post_id);
			state.posts[key] = payload;
			return { ...state };

		//delete the blog post from array of posts
		case BlogActionTypes.DELETE_BLOG_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.post_id !== payload)
			};

		//Increment the like of blog post
		case BlogActionTypes.LIKE_BLOG_POST:
			key = state.posts.findIndex(post => post.post_id === payload);
			state.posts[key].likes++;
			return { ...state, changes: !state.changes };

		//Return default state if there is unknown action runs
		default:
			return state;
	}
};

export default BlogPostReducer;
