import React, { Component } from 'react';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import { getVideos } from '../actions/index';
import { getArticles } from '../actions/index';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: '1%',
  },
  gridList: {
    width: '100%',
    height: '50%',
    overflowY: 'auto',
  },
};

class Home extends Component{
	constructor(props) {
		super(props);

		this.state = {
	 		url_s3_videos: 'https://s3-us-west-2.amazonaws.com/feedback-adpi/videos/'
	 	}
	}
	componentWillMount(){
		this.props.getVideos().then((request) => {
			console.log("Videos",request)
		})
		this.props.getArticles().then((request) => {
			console.log("Videos",request)
		})
	}
	renderGridVideos(){
		return this.props.videos.map((video) => {
			return (
		    <GridTile
		    	titlePosition='top'
		      key={video.id}
		      title={video.name}
		      subtitle={<span>Type <b>{video.source_video_content_type}</b></span>}
		      actionIcon={<IconButton></IconButton>}
		    >
		      <Video loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={this.state.url_s3_videos+video.source_poster_file_name}
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={this.state.url_s3_videos+video.source_video_file_name} type={video.source_video_content_type} /> 
      		</Video>
		    </GridTile>
			)
		});
	}

	renderGridArticles(){
		return this.props.articles.map((articles) => {
			return (
		    <GridTile
		      key={articles.id}
		      title={articles.title}
		      subtitle={<span>by <b>{articles.text}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
		    >
		      <img src={"https://s3-us-west-2.amazonaws.com/feedback-adpi/profiles/fon.jpg"} />
		    </GridTile>
			)
		});
	}

	render(){
		if(!this.props.videos[0]){
			return <div> No video for show </div>;
		}

		return(
			<div style={styles.root}>
				<GridList
					cols={5}
				  style={styles.gridList}
				>
					{this.renderGridVideos()}
				</GridList>

				<GridList
					cols={5}
				  style={styles.gridList}
				>
					{this.renderGridArticles()}
				</GridList>
			</div>
	)}
}

function mapStateToProps(state){
	return { 
		videos: state.videos.all_videos,
		articles: state.articles.all_articles
	}
}

export default connect(mapStateToProps, {getVideos: getVideos, getArticles: getArticles})(Home);