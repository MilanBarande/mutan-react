import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";
import axios from "axios";
import FileUploader from "./FileUploader";
import ResultsTable from "./ResultsTable";
import { url } from "../Constants.js";

const qs = require("qs");

/* 
  global FileReader
*/

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visual: null,
      question: "What is it ?"
    };
    this.handleFileInput = this.handleFileInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.fileUpload(this.state.visual);
  }

  handleQuestionInput = e => {
    this.setState({ question: e.target.value });
  };

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

  list = elements => elements.map(element => <li key={element}>{element}</li>);

  render() {
    const placeholder =
      "What is it ? (default) What is in the center of the image ? What kind of animal is this ?";
    const { output, probabilities, visual } = this.state;
    const fakeOutput = ["oui", "non", "peut-être", "salut", "ciao"];
    const fakeProba = ["65", "54", "32.25", "30", "14"];
    const data = output || fakeOutput;
    const proba = probabilities || fakeProba;
    const isImage =
      visual &&
      (typeof visual === "string" || visual instanceof String) &&
      visual.startsWith("data:image/");
    return (
      <form className="demo-form" onSubmit={this.onFormSubmit}>
        <FileUploader
          onChange={this.handleFileInput}
          className="form-element"
        />
        {isImage ? (
          <div className={visual ? "preview" : "hidden"}>
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
        <FormControl
          type="text"
          placeholder={placeholder}
          onChange={this.handleQuestionInput}
          className="text-input form-element"
        />
        <Button
          type="submit"
          className="submit-button"
          bsStyle="primary"
          bsSize="small"
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default DemoForm;
