import { createSelector } from 'reselect';

//select the Blogs Object from App Object
const selectBlogs = state => state.blogs;

//It helps to select the array of posts from blogs object
export const selectPosts = createSelector([selectBlogs], blogs => blogs.posts);

//select the change field of an object for like updation
export const selectChanges = createSelector(
	[selectBlogs],
	blogs => blogs.changes
);
