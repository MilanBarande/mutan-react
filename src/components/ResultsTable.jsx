import React, { Component } from 'react';
import { Table, Grid } from 'react-bootstrap';

class ResultsTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="results-table">
        {data ? (
          <Table responsive>
            <thead>
              <tr>
                <th data-field="id">Rank</th>
                <th data-field="name">Answer</th>
                <th data-field="price">Confidence(%)</th>
              </tr>
            </thead>
            {data.answers &&
            data.probabilities && (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{data.answers[0]}</td>
                  <td>{data.probabilities[0]}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{data.answers[1]}</td>
                  <td>{data.probabilities[1]}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{data.answers[2]}</td>
                  <td>{data.probabilities[2]}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>{data.answers[3]}</td>
                  <td>{data.probabilities[3]}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>{data.answers[4]}</td>
                  <td>{data.probabilities[4]}</td>
                </tr>
              </tbody>
            )}
          </Table>
        ) : (
          <h4 className="instructions2">The results will appear bellow</h4>
        )}
      </div>
    );
  }
}

export default ResultsTable;
