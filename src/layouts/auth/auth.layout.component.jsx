import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/copyright/copyright.component';
import LoginPage from '../../pages/auth/login.page.component';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from '../../pages/auth/register.page.component';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	}
}));

export default function AuthLayout() {
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					<Switch>
						<Route path='/login' render={() => 'Sign In'} />
						<Route path='/register' render={() => 'Sign Up'} />
					</Switch>
				</Typography>
				<Switch>
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegisterPage} />
				</Switch>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
