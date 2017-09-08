import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPitch } from '../actions';
import { compose, defaultProps } from "recompose";

class PitchNew extends Component {

  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">
        {field.meta.touched ? field.meta.error : ''}
      </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPitch(values, () => {
      this.props.history.push('/pitches');
    });
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Pitch"
          name="pitch"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/pitches">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.pitch) {
    errors.pitch = "Create a pitch!";
  }

  // if errors is empty form is okay to submit
  return errors;
}

export default compose(
  defaultProps({}),
  reduxForm({
    validate,
    form: 'PitchNewForm'
  }))(
  connect(null, { createPitch })(PitchNew)
);
