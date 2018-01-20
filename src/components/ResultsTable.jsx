import React, { Component } from "react";
import { Table } from "react-materialize";

class ResultsTable extends Component {
  render() {
    const { probabilities, answers } = this.props.data;
    console.log(this.props.data);
    return (
      <Table centered>
        <thead>
          <tr>
            <th data-field="id">Rank</th>
            <th data-field="name">Answer</th>
            <th data-field="price">Confidence(%)</th>
          </tr>
        </thead>
        {answers &&
        probabilities && (
          <tbody>
            <tr>
              <td>1</td>
              <td>{answers[0]}</td>
              <td>{probabilities[0]}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{answers[1]}</td>
              <td>{probabilities[1]}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{answers[2]}</td>
              <td>{probabilities[2]}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{answers[3]}</td>
              <td>{probabilities[3]}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{answers[4]}</td>
              <td>{probabilities[4]}</td>
            </tr>
          </tbody>
        )}
      </Table>
    );
  }
}

export default ResultsTable;
