import { Component } from "react";
import Container from "./App.styled";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";



export class App extends Component {
     
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    optionsForButtons = ['good', 'neutral', 'bad'];
        


    incrementValue = ({target : {name}}) => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    };


    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback() !== 0 ?
            Math.round((100 / this.countTotalFeedback()) * this.state.good)
            : 0;

    };

    render() {

        return <Container>
            <Section title="Please leave feedback">
                <FeedbackOptions options={this.optionsForButtons} onLeaveFeedback={this.incrementValue} />
            </Section>

            <Section title="Statistics">
           
                {this.countTotalFeedback() === 0 ?
                    <Notification message="There is no feedback"></Notification> : 
                    <Statistics
                    good={this.state.good} neutral={this.state.neutral}
                    bad={this.state.bad} name={this.state}
                    total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}
                />}
                
            </Section>
        </Container>
    }

    
};

