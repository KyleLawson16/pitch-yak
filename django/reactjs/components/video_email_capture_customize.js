import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions';
import { Dimmer, Grid, Loader } from 'semantic-ui-react';

import CustomizeBar from './customize_bar';
import EmailCaptureForm from './email_capture_form';

class VideoEmailCaptureEdit extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchVideo(this.props.match.params.id);
  }

  render() {

    const video_list = this.props.selectedVideo.undefined;

    if (!video_list) {
      return (
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>
      );
    }

    const video = this.props.selectedVideo.undefined.items[0];

    return (
      <div>
        <Grid centered>
          <Grid.Column width={8}>
            <EmailCaptureForm id={video.id} title="please enter your email" skip="none" size="half" />
            <CustomizeBar />
          </Grid.Column>
        </Grid>
      </div>
    );
  };
}

function mapStateToProps({ selectedVideo }) {
  return { selectedVideo: selectedVideo };
}

export default connect(mapStateToProps, { fetchVideo })(VideoEmailCaptureEdit);
