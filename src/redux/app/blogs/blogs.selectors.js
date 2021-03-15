import { createSelector } from 'reselect';

const selectBlogs = state => state.blogs;

export const selectPosts = createSelector([selectBlogs], blogs => blogs.posts);

export const selectChanges = createSelector(
	[selectBlogs],
	blogs => blogs.changes
);
