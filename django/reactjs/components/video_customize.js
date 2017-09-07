import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions';
import { Link } from 'react-router-dom';
import { Button, Dimmer, Embed, Grid, Loader, Image, Segment } from 'semantic-ui-react';

import VideoIframe from './video_iframe';

class VideoCustomize extends Component {

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.id);
  }
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.fetchPost(id);
  // }

  renderVideo() {
    const video = this.props.selectedVideo.undefined.items[0];

    return (
      <Grid.Column width={8}>
        <h3>{video.snippet.title}</h3>
        <h5>{video.snippet.channelTitle}</h5>
        <VideoIframe id={video.id} />
      </Grid.Column>
    );
  }

  render() {
    const video = this.props.selectedVideo.undefined;

    if (!video) {
      return (
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>
      );
    }

    return (
      <Grid centered>
        {this.renderVideo()}
        <Grid.Row>
          <Grid.Column width={4} textAlign='center'>
            <Link to={`/${this.props.selectedVideo.undefined.items[0].id}/email-capture`}>
              <Button inverted color='blue' size='big'>Add Email-capture Form</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ selectedVideo }) {
  return { selectedVideo: selectedVideo };
}

export default connect(mapStateToProps, { fetchVideo })(VideoCustomize);
