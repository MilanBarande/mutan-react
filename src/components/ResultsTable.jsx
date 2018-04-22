import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ResultsTable extends Component {
  render() {
    const { result } = this.props;
    const { data } = result || {};
    return (
      <div className="results-table">
        { data ? (
          <Table responsive>
            <thead>
              <tr>
                <th data-field="id">Rank</th>
                <th data-field="name">Answer</th>
                <th data-field="price">Confidence (%)</th>
              </tr>
            </thead>
            {data.ans &&
            data.val && (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{data.ans[0]}</td>
                  <td>{data.val[0]}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{data.ans[1]}</td>
                  <td>{data.val[1]}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{data.ans[2]}</td>
                  <td>{data.val[2]}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>{data.ans[3]}</td>
                  <td>{data.val[3]}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>{data.ans[4]}</td>
                  <td>{data.val[4]}</td>
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
