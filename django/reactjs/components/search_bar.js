import React, { Component } from 'react';
import { Grid, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column textAlign='center' width={8}>
          <h3>Search for videos that you would like to customize.</h3>
          <Input
            fluid
            icon='search'
            placeholder='Search...'
            value={this.state.term}
            onChange={e => this.onInputChange(e.target.value)} />
        </Grid.Column>
      </Grid>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
