import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

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
            //   evenfun = () => {
            //     if(this.state.count % 2 === 0){
            //         this.setState((prevState) => ({
            //             count: prevState.count + 1,
            //             }));
            //             }
            //             };

              
  render() {
    return (
        <>
         <button onClick={this.allClicksCounter}>Click me</button>
        
        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer count={this.state.count} /> 
      </>
    )
  }
}
