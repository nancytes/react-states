import React, { Component } from 'react';

class EvenCounterDisplayer extends Component {
  render() {
    const { count } = this.props;
    const evenCount = count % 2 === 0 ? count : count - 1;
    return <div>Clicked {evenCount} times</div>;
  }
}

export default EvenCounterDisplayer;


