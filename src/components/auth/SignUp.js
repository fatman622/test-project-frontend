import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import cookie from 'react-cookie';
import axios from 'axios';
import { browserHistory } from 'react-router'
import { signUp } from '../../actions/index';

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

class SignUp extends Component{
	onSubmit(data){
		const {signUp, reset} = this.props;

		return signUp(data).then((request) => {
			console.log("Request....",request)
			if (data.email == null) {
	      throw new SubmissionError({ email: 'This field is required'});
	    } 
			if (data.password == null) {
	      throw new SubmissionError({ password: 'This field is required'});
	    } 
	    if (data.password !== data.password_confirmation ) {
	      throw new SubmissionError({ password_confirmation: 'This field is not same as password'});
	    } 

			if(request.error){
				cookie.remove('headersCookie', { path: '/' });
			 	browserHistory.push('/signup');
			} else {
	 			cookie.save('headersCookie', request.payload.headers, { path: '/' });
				axios.defaults.headers = cookie.load('headersCookie');
			  reset()
			  browserHistory.push('/');
			}
		});
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
	          />     
          </div> 
          <div>               
	          <Field 
	          	name="password" 
	          	component={renderInput} 
	          	type="password" 
	          /> 
          </div>
          <div>
	          <Field 
	          	name="password_confirmation" 
	          	component={renderInput} 
	          	type="password" 
	          /> 
          </div>
        	<FlatButton 
        		label="Sign up" 
        		primary={true} 
        		type="submit"
        	/>
	      </form>
			</div>
		);
	}
}


export default connect(null, {signUp: signUp})(reduxForm({ form: 'SignUp' })(SignUp));
