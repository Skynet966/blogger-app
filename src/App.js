import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthLayout from './layouts/auth/auth.layout.component';
import DashboardLayout from './layouts/dashboard/dashboard.layout.component';
import PreviewLayout from './layouts/preview/preview.layout.component';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/dashboard' component={DashboardLayout} />
				<Route path='/auth' component={AuthLayout} />
				<Route path='/' component={PreviewLayout} />
			</Switch>
		</div>
	);
};

export default App;
