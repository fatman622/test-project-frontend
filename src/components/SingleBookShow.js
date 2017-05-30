import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBook, deleteBook} from '../actions/index';
import { browserHistory } from 'react-router'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SingleBookShow extends Component{

	componentWillMount() {
		this.props.getBook(this.props.params.id);
	}

	deleteButtonClick(){
		this.props.deleteBook(this.props.params.id)
			.then(() => {
				browserHistory.push('/');
			});
	}

	render(){
		const styles = {
		DeleteBook: {
			position: 'relative'
		  }
		};

		if(!this.props.book){
			return <div> No book for show </div>;
		}

		return(
			 	<Card>
			    <CardHeader
			      title={"Author: " + this.props.book.author}
			    />
				    <CardText>
				     	{this.props.book.text}
				    </CardText>
		      	<CardActions>
			      	<FlatButton 
			      		id="flat"
			      		secondary={true} 
		      			label="Delete" 
		      			onClick={this.deleteButtonClick.bind(this)} 
		      			style={styles.DeleteBook}/>
			    	</CardActions>
			  </Card>
		);
	}
}

function mapStateToProps(state){
	return { book: state.books.book};
}

export default connect(mapStateToProps, {getBook, deleteBook})(SingleBookShow);