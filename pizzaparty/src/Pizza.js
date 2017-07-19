// js file for pizza
import React, { Component } from 'react';

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type
    }
    // super tells any other component that this Pizza component has changed
  }
  render() {
    let type = this.state.type;
    return(
      <li>{type}</li>
    )
  }
}

export default Pizza;
