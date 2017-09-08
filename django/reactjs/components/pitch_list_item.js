import React, { Component } from 'react';

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
      <li key={this.props.id}>
        {this.props.title}
        <button onClick={this.upVote} className="btn btn-primary">Like</button>
        <button onClick={this.downVote} className="btn btn-danger">Like</button>
        <p>{this.state.count}</p>
      </li>
    );
  };
}

export default PitchListItem;
