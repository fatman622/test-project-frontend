import React, { Component } from 'react';
import {connect} from 'react-redux';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'
import { getProfile } from '../../actions/index';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Profile extends Component{
	componentWillMount() {
		if (!cookie.load('headersCookie')) {
			browserHistory.push('/login');
		}else {
			this.props.getProfile(this.props.params.id)
		}
	}
	render(){
		if(!this.props.profile){
			return <div> No profile for show </div>;
		}
		console.log("Profle....",this.props.profile)
		return(
			<div>
				<Card key={this.props.profile.id}>
			    <CardHeader
			    	avatar={"https://s3-us-west-2.amazonaws.com/feedback-adpi/%3Ausers/"+this.props.profile.avatar_file_name }
			      title={ "Name: " + this.props.profile.first_name + " " + this.props.profile.last_name }
			    />
				    <CardText>	
				    </CardText>
		      	<CardActions> 
			    	</CardActions>
			  </Card>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profile: state.profiles.profile};
}

export default connect(mapStateToProps, {getProfile: getProfile})(Profile);