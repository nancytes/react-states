import React, { Component } from 'react'

export default class Mycounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
            };
            }
            allClicksCounter = () => {
                this.setState((prevState) => ({
                  count: prevState.count + 1,
                }));
              };
  render() {
    return (
        <>
         <button onClick={this.allClicksCounter}>Click me</button>
        <p>Number of clicks: {this.state.count}</p>
        <CounterDisplayer count={this.state.count} />
      </>
    )
  }
}
