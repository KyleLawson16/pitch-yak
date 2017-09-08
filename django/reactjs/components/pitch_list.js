import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import { fetchPitches } from '../actions';

class PitchList extends Component {
  componentDidMount() {
    this.props.fetchPitches();
  }

  renderPitches() {
    return _.map(this.props.pitches, pitch => {
      return (
        <li key={pitch.id}>
          {pitch.title}
        </li>
      );
    });
  }

  render() {

    return (
      <div>
        <h1>List of Pitches</h1>
        <ul>
        {this.renderPitches()}
        </ul>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { pitches: state.pitches };
}

export default connect(mapStateToProps, { fetchPitches })(PitchList);
