import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectPosts } from '../../redux/app/blogs/blogs.selectors';

const useStyles = makeStyles({
	root: {
		width: 345,
		maxWidth: 345
	},
	media: {
		height: 140
	},
	container: {
		gap: '20px'
	},
	title: {
		textTransform: 'capitalize'
	}
});

const HomePage = ({ posts, history }) => {
	const classes = useStyles();
	const handleClick = post => {
		history.push({
			pathname: `/blog-post/${post.title}`,
			state: post
		});
	};
	return (
		<Container>
			<Grid container justify='space-around' className={classes.container}>
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
					posts.map(post => (
						<Grid key={post.post_id}>
							<Card className={classes.root} onClick={() => handleClick(post)}>
								<CardActionArea>
									<CardContent>
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
											<Typography
												variant='caption'
												display='block'
												gutterBottom
											>
												{moment(post.created_at).startOf('hour').fromNow()}
											</Typography>
										</Grid>
										<Typography variant='overline' display='block' gutterBottom>
											{post.category}
										</Typography>
										<Typography
											variant='body2'
											color='textSecondary'
											component='p'
										>
											{post.content}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					))
				)}
			</Grid>
		</Container>
	);
};
const mapStateToProps = createStructuredSelector({
	posts: selectPosts
});
export default connect(mapStateToProps)(withRouter(HomePage));
