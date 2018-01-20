import React from 'react';

class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    const { options, onChange } = this.props;
    return (
      <label htmlFor="picker">
        Please select a question regarding the uploaded image:
        <select id="picker" onChange={onChange}>
          {options &&
            options.map(op => (
              <option value={op} key={op}>
                {op}
              </option>
            ))}
        </select>
      </label>
    );
  }
}

export default Picker;
