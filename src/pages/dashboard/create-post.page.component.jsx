import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPosts } from '../../redux/app/blogs/blogs.selectors';
import { createBlog } from '../../redux/app/blogs/blogs.actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Categories from '../../data/categories.json';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
		minHeight: '80vh'
	}
}));

const CreatePost = ({ createPost, posts, history }) => {
	const classes = useStyles();
	const [data, setData] = useState({
		post: {
			title: '',
			category: '',
			content: ''
		},
		validation: {
			title: false,
			category: false,
			content: false
		},
		title_message: ''
	});

	const handleChange = e => {
		const { name, value } = e.target;
		if (value.length > 3) {
			setData({
				...data,
				post: { ...data.post, [name]: value },
				validation: { ...data.validation, [name]: false }
			});
		} else {
			setData({
				...data,
				validation: { ...data.validation, [name]: true },
				title_message:
					name === 'title'
						? 'Title must have more than three character'
						: data.title_message
			});
		}
	};
	const handleBlur = e => {
		const postTitle = e.target.value;
		if (postTitle.length === 0) {
			handleChange(e);
		} else if (posts.findIndex(post => post.title === postTitle) > -1)
			setData({
				...data,
				validation: { ...data.validation, title: true },
				title_message: `${postTitle} is already created`
			});
	};
	const handleSubmit = e => {
		e.preventDefault();
		const { post } = data;
		let isValid = true;
		Object.values(post).forEach(value =>
			value.length < 4 ? (isValid = false) : ''
		);
		if (isValid) {
			createPost({
				...post,
				post_id: Date.now(),
				created_at: Date.now(),
				likes: 0
			});
			setTimeout(() => {
				history.push({
					pathname: '/dashboard/blog-post',
					state: post.title
				});
			}, 1000);
		}
	};
	return (
		<Paper elevation={3} className={classes.paper}>
			<Box>
				<Button
					variant='contained'
					color='primary'
					onClick={() => history.push('/dashboard')}
				>
					<KeyboardBackspaceIcon />
					Go Back to All Posts
				</Button>
			</Box>
			<form className={classes.form} noValidate onSubmit={handleSubmit}>
				<TextField
					error={data.validation.title}
					helperText={data.validation.title ? data.title_message : ''}
					onBlur={handleBlur}
					variant='outlined'
					margin='normal'
					required
					fullWidth
					label='Post Title'
					name='title'
					autoComplete='off'
					autoFocus
					onChange={handleChange}
				/>
				<Autocomplete
					options={Categories.category}
					getOptionLabel={option => option.title}
					renderInput={params => (
						<TextField
							{...params}
							label='Select Category'
							variant='outlined'
							name='category'
							onSelect={handleChange}
							error={data.validation.category}
							helperText={
								data.validation.category ? 'Category is required' : ''
							}
							required
						/>
					)}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					error={data.validation.content}
					helperText={
						data.validation.content
							? 'Content must have more than three character'
							: ''
					}
					label='Post Content'
					name='content'
					onChange={handleChange}
					autoComplete='off'
					multiline
					rows={4}
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					Publish
				</Button>
			</form>
		</Paper>
	);
};

const mapStateToProps = createStructuredSelector({
	posts: selectPosts
});

const mapDispatchToProps = dispatch => ({
	createPost: post => dispatch(createBlog(post))
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(CreatePost));
