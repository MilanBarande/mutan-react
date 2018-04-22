import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import axios from 'axios';

const qs = require('qs');

const url = process.env.IP; 

/*
  global FileReader, ENV
*/

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visual: null,
      question: 'What is it ?',
      error: '',
      isOpenInput: true
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
      'Enter your question (default: "What is it?")';
    const { visual, isOpenInput } = this.state;
    const isImage =
      visual &&
      (typeof visual === 'string' || visual instanceof String) &&
      visual.startsWith('data:image/');
    return (
      <form className="demo-form" onSubmit={this.onFormSubmit}>
        <h4 className="instructions">Try it out!</h4>
        <div className="file-uploader">
          <label htmlFor="file" className="label-file btn btn-warning upload-button">
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
            Enter your question or click the button bellow to select one among a list of examples
          </label>
          <Button
            onClick={() => this.setState({ isOpenInput: !isOpenInput })}
            className="form-element"
          >
            {isOpenInput ? 'Give me examples' : 'Let me type a question'}
          </Button>
          {isOpenInput ? <FormControl
            id="question"
            type="text"
            placeholder={placeholder}
            onChange={this.handleQuestionInput}
          /> :
      <FormControl componentClass="select" placeholder="select" onChange={this.handleQuestionInput}>
        <option value="What is it ?">What is it ?</option>
        <option value="What color is the object ?">What color is the object ?</option>
        <option value="How many persons are there in this picture ?">
          How many persons are there in this picture ?
        </option>
      </FormControl>
     }
        </div>
        <Button type="submit" className="submit-button" bsStyle="primary">
          Ask MUTAN
        </Button>
      </form>
    );
  }
}

export default DemoForm;
