import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import { likeBlog } from '../../redux/app/blogs/blogs.actions';
import { connect } from 'react-redux';
import {
	selectChanges,
	selectPosts
} from '../../redux/app/blogs/blogs.selectors';
import { createStructuredSelector } from 'reselect';

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxWidth: '80vw',
		padding: '20px',
		margin: '0 auto'
	},
	likeBtn: {
		textAlign: 'right',
		gap: '5px'
	}
});

const BlogPostPage = ({
	history,
	location: { state },
	likePost,
	posts,
	change
}) => {
	const classes = useStyles();
	const [post, setPost] = useState(
		posts.find(x => x.post_id === state.post_id)
	);
	useEffect(() => setPost(posts.find(x => x.post_id === state.post_id)), [
		change
	]);
	const handlePostLike = () => {
		likePost(post.post_id);
	};
	return (
		<>
			<Paper className={classes.root}>
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
const mapStateToProps = createStructuredSelector({
	posts: selectPosts,
	change: selectChanges
});
const mapDispatchToProps = dispatch => ({
	likePost: postId => dispatch(likeBlog(postId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(BlogPostPage));
