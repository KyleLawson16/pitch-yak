import React from 'react';
import { Grid } from 'semantic-ui-react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <Grid padded relaxed='very'>
      {videoItems}
    </Grid>
  );
};

export default VideoList;
