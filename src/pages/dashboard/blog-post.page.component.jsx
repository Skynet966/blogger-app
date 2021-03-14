import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPosts } from '../../redux/app/blogs/blogs.selectors';
import { deleteBlog, updateBlog } from '../../redux/app/blogs/blogs.actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Categories from '../../data/categories.json';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const BlogPost = ({
	history,
	location: { state },
	updatePost,
	posts,
	deletePost
}) => {
	const classes = useStyles();
	const [data, setData] = useState({
		post: state,
		validation: {
			title: false,
			category: false,
			content: false
		},
		title_message: '',
		edit_mode: false
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
		} else if (
			posts.findIndex(
				post => post.title === postTitle && post.post_id !== data.post.post_id
			) > -1
		)
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
			updatePost({ ...post, updated_at: Date.now() });
		}
	};
	const toggleEditMode = () => {
		setData({ ...data, edit_mode: !data.edit_mode });
	};
	const handleDelete = () => {
		deletePost(data.post.post_id);
		history.push('/dashboard/posts');
	};
	return (
		<Box>
			<ButtonGroup disableElevation variant='contained' color='primary'>
				{data.edit_mode ? (
					<Button ariant='contained' color='primary' onClick={toggleEditMode}>
						Cancel
					</Button>
				) : (
					<Button ariant='contained' color='primary' onClick={toggleEditMode}>
						Edit
					</Button>
				)}

				<Button ariant='contained' color='secondary' onClick={handleDelete}>
					Delete
				</Button>
			</ButtonGroup>
			<form className={classes.form} noValidate onSubmit={handleSubmit}>
				<TextField
					error={data.validation.title}
					helperText={data.validation.title ? data.title_message : ''}
					onBlur={handleBlur}
					margin='normal'
					required
					defaultValue={data.post.title}
					fullWidth
					label='Post Title'
					name='title'
					autoComplete='off'
					autoFocus
					onChange={handleChange}
					disabled={!data.edit_mode}
				/>
				<Autocomplete
					options={Categories.category}
					getOptionLabel={option => option.title}
					defaultValue={Categories.category.find(
						value => value.title === data.post.category
					)}
					disabled={!data.edit_mode}
					renderInput={params => (
						<TextField
							{...params}
							label='Select Category'
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
					margin='normal'
					required
					fullWidth
					error={data.validation.content}
					helperText={
						data.validation.content
							? 'Content must have more than three character'
							: ''
					}
					defaultValue={data.post.content}
					label='Post Content'
					name='content'
					onChange={handleChange}
					autoComplete='off'
					multiline
					rows={4}
					disabled={!data.edit_mode}
				/>
				{data.edit_mode ? (
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Update Post
					</Button>
				) : (
					''
				)}
			</form>
		</Box>
	);
};

const mapStateToProps = createStructuredSelector({
	posts: selectPosts
});

const mapDispatchToProps = dispatch => ({
	updatePost: post => dispatch(updateBlog(post)),
	deletePost: postId => dispatch(deleteBlog(postId))
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(BlogPost));
