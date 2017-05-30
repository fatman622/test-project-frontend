import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {getBooks, getBooksElastic} from '../actions/index';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const renderInput = field => (
	<TextField 
		hintText={"Enter " + field.input.name} >
		<input 
			type={field.type} 
			{...field.input} 
		/>
	</TextField>
)

const renderRadioGroup = ({ input, ...rest }) => (
	<RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

class FormFilters extends Component{

	state = {
 		disabledTrue: false,
 		disabledFalse: true
 	}

 	disabledRadio(){
		this.setState({ disabledTrue: !this.state.disabledTrue })
		this.setState({ disabledFalse: !this.state.disabledFalse })
	}

	formKeyUp(data){
		if(data.query){
			console.log("Query...",data.query)
			this.props.getBooksElastic({ params: { query: data.query }});
		} else {
			console.log(data)
			this.props.getBooks({ params: { author: data.author,  available: data.available }});
		}
	}

	formAvailble(data){
		data.available = !data.available;
		console.log(data)
		this.props.getBooks({ params: { author: data.author,  available: data.available}});
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<div onKeyUp={handleSubmit(this.formKeyUp.bind(this))}>
			 	<Field 
        	name="author" 
        	component={renderInput} 
        	type="text" 
        />
        <Field
        	name="query" 
        	component={renderInput} 
        	type="text" 
        />
        <Field 
        	onChange={handleSubmit(this.formAvailble.bind(this))} 
      		name="available" 
      		component={renderRadioGroup}>
          <RadioButton name="trueRadio" value={true} onClick={this.disabledRadio.bind(this)} label="Available" disabled={this.state.disabledTrue}/>
          <RadioButton name="falseRadio" value={false} onClick={this.disabledRadio.bind(this)} label="Not Available" disabled={this.state.disabledFalse}/>
        </Field>   
      </div>
		);
	}
}


export default connect(null, {
	getBooks: getBooks,
 	getBooksElastic: getBooksElastic
 })(reduxForm({ form: 'FormFilters' })(FormFilters));