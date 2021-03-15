import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar.component';
import BlogPostPage from '../../pages/preview/blog-post.page.component';
import HomePage from '../../pages/preview/home.page.component';
const PreviewLayout = () => (
	<>
		<NavBar />
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/blog-post' component={BlogPostPage} />
		</Switch>
	</>
);

export default PreviewLayout;
