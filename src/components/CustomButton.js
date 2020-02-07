import React, { Component } from 'react';
import {
  Button
} from 'react-bootstrap';

export default class CustomButton extends Component {
  render() {
    const { title = '', btnColor = 'primary', onClick = () => {}, className = ''  } = this.props;
    return (
      <Button 
        variant={btnColor}
        onClick={onClick}
        className={className}
      >
        {title}
      </Button>
    )
  }
}
