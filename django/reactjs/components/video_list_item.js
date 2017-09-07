import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Grid, Image } from 'semantic-ui-react';

const VideoListItem = ({video}) => {
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.high.url;
  const customizeLink = `/${video.id.videoId}`;

  return (
    <Grid.Column width={4}>
      <Card fluid>
        <Image fluid src={imageUrl} />
        <Card.Content>
          <Card.Header>
            {video.snippet.title}
          </Card.Header>
          <Card.Meta>
            {video.snippet.channelTitle}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={customizeLink}>
            <Button
              primary
              fluid
              color='blue'
              size='big'>
              Customize Video
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default VideoListItem;
