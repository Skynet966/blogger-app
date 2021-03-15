import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

//Selectors
import { selectPosts } from '../../redux/app/blogs/blogs.selectors';

//Material UI Components
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';

//Material UI styles
import useStyles from '../pages.styles';

//List of Blog-posts page component
const AllPostsPage = ({ posts, history }) => {
	const classes = useStyles();

	const handleClick = post => {
		history.push({
			pathname: '/dashboard/blog-post',
			state: post
		});
	};

	return (
		<Paper elevation={3} className={classes.paper}>
			<Box textAlign='right' marginBottom='20px'>
				<Button
					variant='contained'
					color='primary'
					onClick={() => history.push('/dashboard/create-post')}
				>
					Write New Blog
				</Button>
			</Box>
			{posts.length === 0 ? (
				<Typography
					variant='h5'
					className={classes.message}
					color='textPrimary'
				>
					{
						'There is no blog writen yet! Please click on Create new Blog to start with.'
					}
				</Typography>
			) : (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='Blogs list'>
						<TableHead>
							<TableRow>
								<TableCell>Post Title</TableCell>
								<TableCell align='right'>Category</TableCell>
								<TableCell align='right'>Created</TableCell>
								<TableCell align='right'>Content</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{posts.map(post => (
								<TableRow key={post.post_id} onClick={() => handleClick(post)}>
									<TableCell component='th' scope='row'>
										{post.title}
									</TableCell>
									<TableCell align='right'>{post.category}</TableCell>
									<TableCell align='right'>
										{moment(post.created_at).startOf('hour').fromNow()}
									</TableCell>
									<TableCell align='right'>{post.content}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Paper>
	);
};

//Get all posts from state container
const mapStateToProps = createStructuredSelector({
	posts: selectPosts
});
export default connect(mapStateToProps)(withRouter(AllPostsPage));
