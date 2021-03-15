import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxWidth: '80vw',
		padding: '20px',
		margin: '0 auto'
	}
});

const BlogPostPage = ({ history, location: { state } }) => {
	const classes = useStyles();
	const post = state;
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
			</Paper>
		</>
	);
};
export default withRouter(BlogPostPage);
