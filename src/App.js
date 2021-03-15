import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashboardLayout from './layouts/dashboard/dashboard.layout.component';
import PreviewLayout from './layouts/preview/preview.layout.component';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/dashboard' component={DashboardLayout} />
				<Route path='/' component={PreviewLayout} />
			</Switch>
		</div>
	);
};

export default App;
