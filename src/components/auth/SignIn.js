import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import cookie from 'react-cookie';
import axios from 'axios';
import { browserHistory } from 'react-router'
import { signIn } from '../../actions/index';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

class SignIn extends Component{
	onSubmit(data){
		const {signIn, reset} = this.props;

		return signIn(data).then((request) => {
			

			if (data.email == null) {
	      throw new SubmissionError({ email: 'This field is required'})
	    } 
			if (data.password == null) {
	      throw new SubmissionError({ password: 'This field is required'})
	    } 
	    if(!request.error){
	    	cookie.save('headersCookie', request.payload.headers, { path: '/' });
				axios.defaults.headers = cookie.load('headersCookie');
		    reset()
		    browserHistory.push('/');
	 	 }else{
	 	 		cookie.remove('headersCookie', { path: '/' });
	 	 		browserHistory.push('/login');
	 	 		throw new SubmissionError({ password: 'Wrong password'})
	 	 }
		});
	}

	redirectToSignUp(){
		browserHistory.push('/signup');
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<div className="formLogin">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div>
	          <Field 
	          	name="email" 
	          	component={renderInput} 
	          	type="mail" 
	          /> 
          </div>  
          <div>                  
	          <Field 
	          	name="password" 
	          	component={renderInput} 
	          	type="password" 
	          />
	        </div>
          <FlatButton 
          	onTouchTap={this.redirectToSignUp.bind(this)}
        		label="Sign up" 
        		secondary={true} 
        		type="submit"
        	/>
        	<FlatButton 
        		label="Login" 
        		primary={true} 
        		type="submit"
        	/>
	      </form>
			</div>
		);
	}
}


export default connect(null, {signIn: signIn})(reduxForm({ form: 'SignIn' })(SignIn));
