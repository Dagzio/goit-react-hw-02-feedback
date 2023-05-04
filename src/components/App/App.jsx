import Container from "./App.styled";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import { Component } from "react";

export class App extends Component {
     
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }


    incrementValue = (option) => {
        this.setState(prevState => {
            return {
                [option]: prevState[option] + 1,
            };
        });
    };

    render() {

        return <Container>
            
            <FeedbackOptions options={['good', 'neutral', 'bad' ]} onLeaveFeedback={this.incrementValue} />
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} name={this.state} />

        </Container>
    }
};