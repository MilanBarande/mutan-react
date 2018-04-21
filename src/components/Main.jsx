import React, { Component } from 'react';
import DemoForm from './DemoForm';
import ResultsTable from './ResultsTable';
import { fakeData } from '../Constants';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.onDataFetch = this.onDataFetch.bind(this);
  }

  onDataFetch(data) {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <DemoForm onDataFetch={this.onDataFetch} />
        <ResultsTable data={data || fakeData} />
      </div>
    );
  }
}

export default Main;
