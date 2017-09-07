import React, { Component } from 'react';

class EmailCaptureForm extends Component {
  render() {
    if (this.props.size == 'full') {
      return (
        <div className="video-form-container">
          <div className="iframe-form-container">
            <iframe
              className="iframe-video"
              src={`https://www.youtube.com/embed/${this.props.id}`}
              frameBorder="0"
              webkitAllowFullScreen
              mozAllowFullScreen
              allowFullScreen>
            </iframe>
            <div className="form-container form-container-full">
              <form
                className="email-capture-form email-capture-form-full"
                onsubmit=''>
                <div className="form-title-text form-title-text-full">
                  {this.props.title}
                </div>
                <input
                  className='form-email-input'
                  type='email'
                  placeholder='Email Address' />
                <input
                  className='form-submit-btn'
                  type='submit'
                  value='Submit' />
                <div
                  className="form-skip-btn form-skip-btn-full"
                  style={{display: this.props.skip}}>
                  Skip Form
                </div>
              </form>
              <a href='http://www.getvidvision.com/' target='__blank'>
                <img className='form-branding' src="" />
              </a>
            </div>
          </div>
        </div>
      );
    };

    if (this.props.size == 'half') {
      return (
        <div className="video-form-container">
          <div className="iframe-form-container">
            <iframe
              className="iframe-video"
              src={`https://www.youtube.com/embed/${this.props.id}`}
              frameBorder="0"
              webkitAllowFullScreen
              mozAllowFullScreen
              allowFullScreen>
            </iframe>
            <div className="form-container">
              <form
                className="email-capture-form"
                onsubmit=''>
                <div className="form-title-text">
                  {this.props.title}
                </div>
                <input
                  className='form-email-input'
                  type='email'
                  placeholder='Email Address' />
                <input
                  className='form-submit-btn'
                  type='submit'
                  value='Submit' />
                <div
                  className="form-skip-btn"
                  style={{display: this.props.skip}}>
                  Skip Form
                </div>
              </form>
              <a href='http://www.getvidvision.com/' target='__blank'>
                <img className='form-branding' src="" />
              </a>
            </div>
          </div>
        </div>
      );
    };
  };
}

export default EmailCaptureForm;
