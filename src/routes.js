import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import BooksHome from './components/BooksHome';
import NewBook from './components/NewBook';
import SingleBookShow from './components/SingleBookShow';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Profile from './components/profiles/Profile';
import CurrentAccount from './components/profiles/CurrentAccount';
import ProfilesUsers from './components/profiles/ProfilesUsers';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={BooksHome} />
			<Route path="login" component={SignIn} />
			<Route path="signup" component={SignUp} />
			<Route path="profiles/:id" component={Profile} />
			<Route path="account/:id" component={CurrentAccount} />
			<Route path="profiles" component={ProfilesUsers} />
			<Route path="books/new" component={NewBook} />
			<Route path="books/:id" component={SingleBookShow} /> 
		</Route>
	</Router>
)