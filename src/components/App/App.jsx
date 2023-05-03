import Container from "./App.styled";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

export const App = () => {
    return (
        <Container>
            
           < FeedbackOptions/>

        <Statistics />

    </Container>
    );
};
