import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPosts } from '../../redux/app/blogs/blogs.selectors';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: '36ch',
		backgroundColor: theme.palette.background.paper
	},
	inline: {
		display: 'inline'
	}
}));

const AllPosts = ({ posts, history }) => {
	const classes = useStyles();
	const handleClick = post => {
		history.push({
			pathname: '/dashboard/blog-post',
			state: post
		});
	};
	return (
		<List className={classes.root}>
			{posts.map(post => (
				<div key={post.post_id} onClick={() => handleClick(post)}>
					<ListItem alignItems='flex-start'>
						<ListItemText
							primary={post.title}
							secondary={
								<>
									<Typography
										component='span'
										variant='body2'
										className={classes.inline}
										color='textPrimary'
									>
										{moment(post.created_at).startOf('hour').fromNow()}
									</Typography>
									{` — ${post.content}`}
								</>
							}
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
				</div>
			))}
		</List>
	);
};
const mapStateToProps = createStructuredSelector({
	posts: selectPosts
});
export default connect(mapStateToProps)(withRouter(AllPosts));
