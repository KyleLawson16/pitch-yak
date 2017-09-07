import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions';
import { Link } from 'react-router-dom';
import { Button, Dimmer, Embed, Grid, Loader, Image, Segment } from 'semantic-ui-react';

import EmailCaptureForm from './email_capture_form';
import VideoIframe from './video_iframe';

class VideoEmailCapture extends Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.id);
  }

  renderVideos() {
    const video = this.props.selectedVideo.undefined.items[0];
    const link = `/${video.id}/email-capture/edit`;

    return (
      <Grid.Row>
        <Grid.Column width={6} textAlign='center'>
          <Link to={link}>
            <EmailCaptureForm id={video.id} title="please enter your email" skip="none" size="half" />
            <h4>
              Bottom Half
            </h4>
          </Link>
        </Grid.Column>
        <Grid.Column width={6} textAlign='center'>
          <Link to={link}>
            <EmailCaptureForm id={video.id} title="please enter your email" skip="none" size="full" />
            <h4>
              Full Cover
            </h4>
          </Link>
        </Grid.Column>
      </Grid.Row>
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
        <Grid.Row>
          <Grid.Column width={8}>
            <h3>
              Choose which style form you would like to add to your video
            </h3>
          </Grid.Column>
        </Grid.Row>
        {this.renderVideos()}
      </Grid>
    );
  };
}

function mapStateToProps({ selectedVideo }) {
  return { selectedVideo: selectedVideo };
}

export default connect(mapStateToProps, { fetchVideo })(VideoEmailCapture);
