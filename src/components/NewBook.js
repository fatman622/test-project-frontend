import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {createBook, getBooks} from '../actions/index';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';


const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)
const renderCheckbox = props => (
	<div>
	  <Checkbox 
		  label={props.label}
		  {...props.input}/>
	</div>
)

class NewBook extends Component{
	onSubmit(data){
		if(data.available !== true){
			data.available = false
		}
		const {createBook, reset} = this.props;
		return createBook(data).then(() => {
			if (data.author == null) {
	      throw new SubmissionError({ author: 'This field is required'})
	    } 
			if (data.text == null) {
	      throw new SubmissionError({ text: 'This field is required'})
	    } 
	    if (data.pages == null) {
	      throw new SubmissionError({ pages: 'This field is required'})
	    } 
	    console.log("Data" ,data)
			this.props.getBooks();
			reset()
		});
	 
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<div className="newBook">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div>
	          <Field 
	          	name="author" 
	          	component={renderInput} 
	          	type="text" 
	          	label="Author"
	          />
          </div>
          <div>                     
	          <Field 
	          	name="text" 
	          	component={renderInput} 
	          	type="text"
	          	label="Text" 
	          />
          </div>
          <div> 
	          <Field 
	          	name="pages" 
	          	component={renderInput} 
	          	type="number" 
	          	label="Number of pages"
	          />
          </div>
          
          <Field 
          	name="available" 
          	component={renderCheckbox} 
          	label="Available" 
          />                
        	<FlatButton 
        		label="Save" 
        		primary={true} 
        		type="submit"
        	/>
	      </form>
			</div>
		);
	}
}


export default connect(null, {createBook: createBook, getBooks: getBooks})(reduxForm({ form: 'NewBook' })(NewBook));