import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Button, Card, Container, Grid } from 'semantic-ui-react';

import { fetchPitches } from '../actions';
import PitchListItem from './pitch_list_item';

class PitchList extends Component {


  componentDidMount() {
    this.props.fetchPitches();
  }

  renderPitches() {
    return _.map(this.props.pitches, pitch => {
      return (
        <PitchListItem id={pitch.id} title={pitch.title} pitch={pitch.pitch} />
      );
    });
  }



  render() {

    return (
      <Container>
      <Grid centered>
        <Grid.Column width={10}>
          <h1>Pitch Yak</h1>
          <Card.Group>
          {this.renderPitches()}
          </Card.Group>
          <Link to="/pitches/new">
            <Button size="large" inverted color='green'>Add Pitch</Button>
          </Link>
        </Grid.Column>
      </Grid>
      </Container>
    );
  };
}

function mapStateToProps(state) {
  return { pitches: state.pitches };
}

export default connect(mapStateToProps, { fetchPitches })(PitchList);
