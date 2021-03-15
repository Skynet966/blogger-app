import { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';

//Navigation Bar
import NavBar from './components/navbar/navbar.component';

//Material UI Component
import Container from '@material-ui/core/Container';

//dashboard Pages
import BlogPostPage from './pages/dashboard/blog-post.page.component';
import CreatePostPage from './pages/dashboard/create-post.page.component';
import AllPostsPage from './pages/dashboard/all-posts.page.component';

//Blogs Preview Pages
import PreviewBlogPostPage from './pages/preview/preview-blog-post.page.component';
import HomePage from './pages/preview/home.page.component';

import './App.css';

const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee'
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222'
	}
};
export const ThemeContext = createContext(themes.light);

const App = () => {
	return (
		<>
			<NavBar />
			<ThemeContext.Provider value={themes.light}>
				<Container maxWidth='lg'>
					<Switch>
						<Route path='/dashboard/blog-post' component={BlogPostPage} />
						<Route path='/dashboard/create-post' component={CreatePostPage} />
						<Route exact path='/dashboard' component={AllPostsPage} />
						<Route path='/blog-post' component={PreviewBlogPostPage} />
						<Route exact path='/' component={HomePage} />
					</Switch>
				</Container>
			</ThemeContext.Provider>
		</>
	);
};

export default App;
