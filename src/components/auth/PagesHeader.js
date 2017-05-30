import React, {Component} from 'react';
import {connect} from 'react-redux';
import { signOut } from '../../actions/index';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  title: {
    cursor: 'pointer',
  },
};


class PagesHeader extends Component{

	componentWillMount() {
		if (!cookie.load('headersCookie')) {
			browserHistory.push('/login');
		}
	}

	signOutUser(){
		const { signOut } = this.props;
		if (cookie.load('headersCookie')) {
			signOut().then((q) => {
				cookie.remove('headersCookie', { path: '/' });
				browserHistory.push('/login');
			});
		}
	}

	toCurrentProfile(){
		if (cookie.load('headersCookie')) {
			browserHistory.push('/account/current');
		}
	}

	toAllUsers(){
		if (cookie.load('headersCookie')) {
			browserHistory.push('/profiles');
		}
	}

	toAllBooks(){
		if (cookie.load('headersCookie')) {
			browserHistory.push('/');
		}
	}
	
	render(){
		return(
			<div>
				<AppBar
			    title={	<span onTouchTap={this.toAllBooks.bind(this)} style={styles.title}> Books App </span> }>
  			  <IconMenu
				    iconButtonElement={
				      <IconButton><MoreVertIcon /></IconButton>
				    }
				    targetOrigin={{horizontal: 'left', vertical: 'center'}}
				    anchorOrigin={{horizontal: 'left', vertical: 'center'}}
				  > 
	    			<MenuItem onTouchTap={this.toAllUsers.bind(this)} primaryText="All Users" />
				    <MenuItem onTouchTap={this.toCurrentProfile.bind(this)} primaryText="Profile" />
				    <MenuItem onTouchTap={this.signOutUser.bind(this)} primaryText="Sign out" />
				  </IconMenu>
			  </AppBar>
		  </div>
		)
	}
}
	

export default connect(null, {signOut: signOut})(PagesHeader);
