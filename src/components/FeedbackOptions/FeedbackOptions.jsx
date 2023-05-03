import React, { Component } from "react";

class FeedbackOptions extends Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    incrementGood = () => {
        this.setState((prevState) => {
            return {
            good: prevState.good + 1,
            neutral: prevState.neutral + 1,
            bad: prevState.bad + 1,
            }
           
        })
        console.log(this.state);
    };

    render() {
        return (
            <>
                <h2>Please leave feedback</h2>
                <ul>
                    <li>
                        <button type="button" onClick={this.increment} value={this.state.good}>Good</button>
                    </li>
                    <li>
                        <button type="button" onClick={this.increment} value={this.state.neutral}>Neutral</button>
                    </li>
                    <li>
                        <button type="button" onClick={this.increment} value={this.state.bad}>Bad</button>
                    </li>

                </ul>
            </>
        );
    };
    
};

export default FeedbackOptions;