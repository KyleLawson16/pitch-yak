import React, { Component } from 'react';

class VideoIframe extends Component {
  render() {
    return (
      <div className="iframe-container">
        <iframe
          src={`https://www.youtube.com/embed/${this.props.id}`}
          allowFullScreen>
        </iframe>
      </div>
    );
  };
}

export default VideoIframe;
