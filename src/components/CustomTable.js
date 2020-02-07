import React, { Component } from 'react'
import {
  Table
} from 'react-bootstrap';
import classNames from "classnames";
import CustomSelect from './CustomSelect';

export default class CustomTable extends Component {
  
  render() {
    const { data } = this.props;
    return (
      <Table bordered  variant="" className="mt-5">
        <thead>
          <tr className="bg-gray">
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, key) => {
              return  <tr key={key} className={classNames({
                        'bg-green': item.status === 'Done',
                        'bg-red': item.status === 'Not started',
                        'bg-blue': item.status === 'In progress'
                      })}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><CustomSelect onChange={this.props.onChange(key)} status={item.status} /></td>
                      </tr>
            })
          }
        </tbody>
      </Table>
    )
  }
}
