import React, { Component } from 'react';
import { Button, FormControl, Grid } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../Constants.js';

const qs = require('qs');

/* 
  global FileReader
*/

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visual: null,
      question: 'What is it ?',
      error: ''
    };
    this.handleFileInput = this.handleFileInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.handleQuestionInput = this.handleQuestionInput.bind(this);
  }

  onFormSubmit(event) {
    const { visual } = this.state;
    if (!visual) {
      this.setState({ error: 'Please upload an image' });
    }
    event.preventDefault();
    this.fileUpload(visual);
  }

  handleQuestionInput(e) {
    this.setState({ question: e.target.value });
  }

  handleFileInput(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ visual: reader.result });
    };
  }

  fileUpload(file) {
    axios
      .post(url, qs.stringify({ visual: file, question: this.state.question }))
      .then(response => this.props.onDataFetch(response));
  }

  render() {
    const placeholder =
      'What is it ? (default) What is in the center of the image ? What kind of animal is this ?';
    const { visual } = this.state;
    const isImage =
      visual &&
      (typeof visual === 'string' || visual instanceof String) &&
      visual.startsWith('data:image/');
    return (
      <Grid>
        <form className="demo-form" onSubmit={this.onFormSubmit}>
          <div className="file-uploader">
            <label htmlFor="file" className="label-file btn btn-default">
              Upload an image
            </label>
            <FormControl
              type="file"
              onChange={this.handleFileInput}
              id="file"
              className="input-file"
            />
            {isImage ? (
              <div className={visual ? 'preview' : 'hidden'}>
                <img
                  src={visual}
                  ref={p => {
                    this.preview = p;
                  }}
                  alt="preview"
                />
              </div>
            ) : null}
            {visual &&
            !isImage && (
              <span className="error">
                This file is not an image, please try again with an image.
              </span>
            )}
          </div>
          <div className="question-input form-element">
            <label htmlFor="question" className="label-question">
              Enter your question
            </label>
            <FormControl
              id="question"
              type="text"
              placeholder={placeholder}
              onChange={this.handleQuestionInput}
            />
          </div>
          <Button type="submit" className="submit-button" bsStyle="primary">
            Ask MUTAN
          </Button>
        </form>
      </Grid>
    );
  }
}

export default DemoForm;
