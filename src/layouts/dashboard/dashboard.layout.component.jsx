import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import BlogPost from '../../pages/dashboard/blog-post.page.component';
import CreatePost from '../../pages/dashboard/create-post.page.component';
import AllPosts from '../../pages/dashboard/all-posts.page.component';
import NavBar from '../../components/navbar/navbar.component';

export default function DashboardLayout() {
	return (
		<>
			<NavBar />
			<Container maxWidth='lg'>
				<Switch>
					<Route path='/dashboard/blog-post' component={BlogPost} />
					<Route path='/dashboard/create-post' component={CreatePost} />
					<Route exact path='/dashboard' component={AllPosts} />
				</Switch>
			</Container>
		</>
	);
}
