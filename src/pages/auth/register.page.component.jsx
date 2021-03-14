import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));
const RegisterPage = () => {
	const classes = useStyles();
	return (
		<form className={classes.form} noValidate>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						autoComplete='fname'
						name='firstName'
						variant='outlined'
						required
						fullWidth
						id='firstName'
						label='First Name'
						autoFocus
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant='outlined'
						required
						fullWidth
						id='lastName'
						label='Last Name'
						name='lastName'
						autoComplete='lname'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox value='allowExtraEmails' color='primary' />}
						label='I want to receive inspiration, marketing promotions and updates via email.'
					/>
				</Grid>
			</Grid>
			<Button
				type='submit'
				fullWidth
				variant='contained'
				color='primary'
				className={classes.submit}
			>
				Sign Up
			</Button>
			<Grid container justify='flex-end'>
				<Grid item>
					<Link to='/auth/login' variant='body2'>
						Already have an account? Sign in
					</Link>
				</Grid>
			</Grid>
		</form>
	);
};
export default RegisterPage;
