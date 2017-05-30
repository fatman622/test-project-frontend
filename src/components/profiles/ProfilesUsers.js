import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'
import { getProfiles } from '../../actions/index';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ProfilesUsers extends Component{
	componentWillMount(){
		if (!cookie.load('headersCookie')) {
			browserHistory.push('/login');
		}else {
			this.props.getProfiles();
		}
	}

	renderProfiles(){
		return this.props.profiles.map((profile) => {
			// console.log(profile)
			return (
				<Card key={profile.id}>
			    <CardHeader
			    	avatar={"https://s3-us-west-2.amazonaws.com/feedback-adpi/%3Ausers/"+profile.avatar_file_name }
			      title={ "Name: " + profile.first_name + " " + profile.last_name }
			      size={70}
			    />
				    <CardText>	
				    </CardText>
		      	<CardActions> 
		      		<Link 
		        		to={"/profiles/" + profile.id}>  
        				<FlatButton 
				      		secondary={true} 
			      			label="View">
		      			</FlatButton>
        			</Link>
			    	</CardActions>
			  </Card>
			)
		});
	}

	render(){
		return(
			<div>
				{this.renderProfiles()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profiles: state.profiles.all_profiles }
}

export default connect(mapStateToProps, {getProfiles: getProfiles})(ProfilesUsers);