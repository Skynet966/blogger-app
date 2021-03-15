import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

//Posts Selector
import { selectPosts } from '../../redux/app/blogs/blogs.selectors';

//Material UI components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

//Material UI styles
import useStyles from '../pages.styles';

//Preview All Blog-posts Home page component
const HomePage = ({ posts, history }) => {
	const classes = useStyles();

	//handle click event while click on post
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
							<Card
								className={classes.homeRoot}
								onClick={() => handleClick(post)}
							>
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

//Get all post from state container
const mapStateToProps = createStructuredSelector({
	posts: selectPosts
});
export default connect(mapStateToProps)(withRouter(HomePage));
