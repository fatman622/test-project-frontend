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
import SvgIcon from 'material-ui/SvgIcon';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const iconStyles = {
  marginRight: 24,
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

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


	toAllResources(){
		if (cookie.load('headersCookie')) {
			browserHistory.push('/');
		}
	}
	
	render(){
		return(
			<div>
				<AppBar
					iconElementLeft={	
						<IconButton>
							<HomeIcon onTouchTap={this.toAllResources.bind(this)} style={iconStyles} />
						</IconButton>
					}
			    title={	
			    	<span onTouchTap={this.toAllResources.bind(this)} style={styles.title}> Test App 
			    	</span> 
			    }>
  			  <IconMenu
				    iconButtonElement={
				      <IconButton><MoreVertIcon /></IconButton>
				    }
				    targetOrigin={{horizontal: 'left', vertical: 'center'}}
				    anchorOrigin={{horizontal: 'left', vertical: 'center'}}
				  > 
				    <MenuItem onTouchTap={this.toCurrentProfile.bind(this)} primaryText="Dashboard" />
				    <MenuItem onTouchTap={this.signOutUser.bind(this)} primaryText="Sign out" />
				  </IconMenu>
			  </AppBar>
		  </div>
		)
	}
}
	

export default connect(null, {signOut: signOut})(PagesHeader);
