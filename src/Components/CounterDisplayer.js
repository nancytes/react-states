import React, { Component } from 'react'


export default class CounterDisplayer extends Component {
  render() {
    return <div>All clicks counter: {this.props.count} </div>;
  }
}
