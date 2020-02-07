import React, { Component } from 'react'

export default class CustomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueType: ["Done", "Not started", "In progress"]
    }
  }

  render() {
    const { status = '', onChange = () => {}, className = '' } = this.props;
    const { issueType } = this.state;
    return (
      <select value={status} onChange={onChange} className={className}>
        {issueType.map((type, key) => {
          return <option value={type} key={key}>{type}</option>
        })}
      </select>
    )
  }
}
