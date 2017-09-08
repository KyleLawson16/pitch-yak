import React, { Component } from 'react';
import { Button, Card, Header, Icon } from 'semantic-ui-react';

class PitchListItem extends Component {
  constructor(props) {
    super(props)
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);

    this.state = {
      count: 0
    }
  }

  upVote(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  downVote(e) {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <Card fluid key={this.props.id}>
        <Card.Content>
        <Button.Group floated='right'>
        <Header as='h2'>{this.state.count}</Header>
        <Button.Group vertical>
          <Button icon onClick={this.upVote}>
            <Icon name='chevron up' />
          </Button>
          <Button icon onClick={this.downVote}>
            <Icon name='chevron down' />
          </Button>
          </Button.Group>
        </Button.Group>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Description>
            {this.props.pitch}

          </Card.Description>
        </Card.Content>
      </Card>
    );
  };
}

export default PitchListItem;
