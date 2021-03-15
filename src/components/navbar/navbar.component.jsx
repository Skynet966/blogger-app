import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginBottom: '16px'
	},
	menuButton: {
		marginLeft: 'auto'
	}
}));

const NavBar = ({ history }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar variant='dense'>
					<Typography variant='h6' color='inherit'>
						Blog Post App
					</Typography>
					<Button
						className={classes.menuButton}
						color='inherit'
						onClick={() => history.push('/')}
					>
						Home
					</Button>
					<Button
						// className={classes.menuButton}
						color='inherit'
						onClick={() => history.push('/dashboard')}
					>
						Manage Blogs
					</Button>
					<Button
						// className={classes.menuButton}
						color='inherit'
						onClick={() => history.push('/dashboard/create-post')}
					>
						Create New Blog
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default withRouter(NavBar);
