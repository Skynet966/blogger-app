import { Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import AuthLayout from './layouts/auth/auth.layout.component';
import DashboardLayout from './layouts/dashboard/dashboard.layout.component';

const App = ({ fire }) => {
	useEffect(() => fire());
	return (
		<div>
			<Switch>
				<Route path='/dashboard' component={DashboardLayout} />
				<Route path='/' component={AuthLayout} />
			</Switch>
		</div>
	);
};

const mapDispatchToProps = dispatchEvent => ({
	fire: () => dispatchEvent({ type: 'HEAVEY_DRIVER', payload: null })
});
export default connect(null, mapDispatchToProps)(App);
