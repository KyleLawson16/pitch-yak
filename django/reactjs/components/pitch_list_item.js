import React, { Component } from 'react';
import { Button, Card, Grid, Header, Icon, Item } from 'semantic-ui-react';

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
          <Grid>
            <Grid.Column width={12}>
              <Header as='h2'>{this.props.title}</Header>
              {this.props.pitch}
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
              <Header as='h3'>Votes: {this.state.count}</Header>
              <Button.Group vertical floated="right">
                <Button icon onClick={this.upVote}>
                  <Icon name='chevron up' />
                </Button>
                <Button icon onClick={this.downVote}>
                  <Icon name='chevron down' />
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  };
}

export default PitchListItem;
