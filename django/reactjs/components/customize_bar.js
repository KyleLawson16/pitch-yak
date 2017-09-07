import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class CustomizeBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: 'text',
    };
  }

  handleClick = () => this.updateSteps(this.props.id)

  updateSteps = message => this.setState({ steps: [message, ...this.state.steps] })

  render() {
    return (
      <div>
        <Button.Group widths='3'>
          <Button
            id="text"
            inverted
            color="blue"
            size="big"
            onClick={this.handleClick}>Text</Button>
          <Button
            id="timing"
            inverted
            color="blue"
            size="big"
            onClick={this.handleClick}>Timing</Button>
          <Button inverted color="blue" size="big">Colors</Button>
        </Button.Group>
      </div>
    );
  };
}

function activateButton(step) {
  if (step == 'Text') {
    console.log('It worked');
  }
  else if (step == 'Timing') {
    console.log('Timing');
  }
}

export default CustomizeBar;
