import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Card } from 'semantic-ui-react';

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
      <div>
        <h1>List of Pitches</h1>
        <Card.Group>
        {this.renderPitches()}
        </Card.Group>
        <Link className="btn btn-primary" to="/pitches/new">
          Add Pitch
        </Link>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { pitches: state.pitches };
}

export default connect(mapStateToProps, { fetchPitches })(PitchList);
