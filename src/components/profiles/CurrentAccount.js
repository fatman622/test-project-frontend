import React, { Component } from 'react';
import {connect} from 'react-redux';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'
import { getProfile, updateProfile } from '../../actions/index';
import {reduxForm, Field} from 'redux-form';

// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';


const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)
const styles = {
  resources: {
    float: 'left',
    marginLeft: '20%',
    marginTop: '60px'
  },
  userInfo: {
  	float: 'right',
  	marginRight: '20%',
    marginTop: '60px',
    padding: '20px'
  }
};

const FileUpload = ({ input, type }) =>
  <input type={type} {...input} />

const Resources = () => (
  <div style={styles.resources}>
	  <Paper>
	    <List>
	      <Subheader>Resources available</Subheader>
	      <ListItem
	        primaryText="Profile photo"
	        secondaryText="Change your Google+ profile photo"
	      />
	      <ListItem
	        primaryText="Show your status"
	        secondaryText="Your status is visible to everyone you use with"
	      />
	    </List>
	  </Paper>
  </div>
);

class CurrentAccount extends Component{

	componentWillMount() {
		const {getProfile} = this.props;
		if (!cookie.load('headersCookie')) {
			browserHistory.push('/login');
		}else{
				getProfile(this.props.params.id).then((request) => {
				const initData = {
	    		"first_name": this.props.profile.first_name,
	    		"last_name": this.props.profile.last_name
	  		};
	  		this.props.initialize(initData);
			});
		}
	}


	onSubmit(data){
		const { updateProfile, getProfile} = this.props;
		var id = this.props.params.id;
		return updateProfile(id, data).then(() => {
			getProfile(id);
		});
	 
	}

	render(){
		if(!this.props.profile){
			return <div> No profile for show </div>;
		}
		// console.log(this.props.profile)
		const {handleSubmit} = this.props;
		return(
			<div>
				<Resources />
				<Paper style={styles.userInfo}>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Avatar
					 		src={"https://s3-us-west-2.amazonaws.com/feedback-adpi/profiles/"+this.props.profile.avatar_file_name} 
					 		size={150}
					 	/>
					 	<br />  
	          <div>
		         	<Field
		         	 name="avatar"
		         	 component={FileUpload}
		         	 type="file" 
		         	/>
	         	</div>
						<div>
		          <Field 
		          	name="first_name" 
		          	component={renderInput} 
		          	type="text"
		          	label="First Name"
		          />
	          </div>
	          <div>                     
		          <Field 
		          	name="last_name" 
		          	component={renderInput} 
		          	type="text"
		          	label="Last Name"
		          />
	          </div>
	         
	        	<FlatButton 
	        		label="Update" 
	        		primary={true} 
	        		type="submit"
	        	/>
		      </form>
	      </Paper>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profile: state.profiles.profile};
}

export default connect(mapStateToProps, {getProfile: getProfile, updateProfile: updateProfile})(reduxForm({ form: 'UpdateCurrentAccount'})(CurrentAccount));