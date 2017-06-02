import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CurrentAccount from './components/profiles/CurrentAccount';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="login" component={SignIn} />
			<Route path="signup" component={SignUp} />
			<Route path="account/:id" component={CurrentAccount} />
		</Route>
	</Router>
)