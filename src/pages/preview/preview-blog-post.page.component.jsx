import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';

//Selectors
import {
	selectChanges,
	selectPosts
} from '../../redux/app/blogs/blogs.selectors';

//Redux action method
import { likeBlog } from '../../redux/app/blogs/blogs.actions';

//Material UI components
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

//Material UI icon
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

//Material UI styles
import useStyles from '../pages.styles';

//Preview Blog-post page component
const PreviewBlogPostPage = ({
	history,
	location: { state },
	likePost,
	posts,
	change
}) => {
	const classes = useStyles();

	//private state
	const [post, setPost] = useState(
		posts.find(x => x.post_id === state.post_id)
	);

	//component will update life cycle method using useEffect hook
	useEffect(() => setPost(posts.find(x => x.post_id === state.post_id)), [
		change
	]);

	//Handle event on click of like button
	const handlePostLike = () => {
		likePost(post.post_id);
	};

	return (
		<>
			<Paper className={classes.previewRoot}>
				<Box marginBottom='20px'>
					<Button onClick={() => history.push('/')}>
						<KeyboardBackspaceIcon />
						Go Back to All Posts
					</Button>
				</Box>
				<Grid
					container
					direction='row'
					justify='space-between'
					alignItems='center'
				>
					<Typography
						gutterBottom
						variant='h5'
						component='h2'
						className={classes.title}
					>
						{post.title}
					</Typography>
					<Typography variant='caption' display='block' gutterBottom>
						{moment(post.created_at).startOf('hour').fromNow()}
					</Typography>
				</Grid>
				<Typography variant='h6' gutterBottom>
					{post.category}
				</Typography>
				<Typography variant='body1' gutterBottom>
					{post.content}
				</Typography>
				<Grid
					className={classes.likeBtn}
					container
					direction='row'
					justify='flex-end'
					alignItems='center'
				>
					<Typography variant='overline' display='block' gutterBottom>
						{post.likes} Likes
					</Typography>
					<Fab aria-label='like' color='secondary' onClick={handlePostLike}>
						<FavoriteIcon />
					</Fab>
				</Grid>
			</Paper>
		</>
	);
};

//Get all posts and change props from state container
const mapStateToProps = createStructuredSelector({
	posts: selectPosts,
	change: selectChanges
});
//trigger likepost state change action
const mapDispatchToProps = dispatch => ({
	likePost: postId => dispatch(likeBlog(postId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(PreviewBlogPostPage));
