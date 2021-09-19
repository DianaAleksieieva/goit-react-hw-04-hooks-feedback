import React from 'react';
import { Container} from "./App.styled";
import Statistic from './Statistic/Statistic.jsx'; 
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';

export default class Feedback extends React.Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
}
  
  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    const total = good + neutral + bad;
        return total;
  }
  
  countPositiveFeedbackPercentage = ({ good } = this.state) => {
    console.log(good > 0)
    if (good > 0) {
      this.goodFeedbackPercent = (((good) / this.countTotalFeedback()) * 100).toFixed(0);
    return this.goodFeedbackPercent
    }
       return this.goodFeedbackPercent
    }
  
  showStatistic = (total = this.countTotalFeedback()) => {
    console.log(total)
    let visible = false
    if (total !== 0) { visible = true }
    return visible
  }

    addFeedback = (option) => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 }
    })     
     }
  render({ good, neutral, bad } = this.state ) {
    return <Container><Section title="Please leave feadback"
      feedbackOption={<FeedbackOptions
        options={this.state}
        onLeaveFeedback={this.addFeedback} />}
      statistic={this.showStatistic() ?
        <Statistic
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          positiveFeedbackPercentag={this.countPositiveFeedbackPercentage()}
          total={this.countTotalFeedback()}
          goodFeedbackPercent={this.goodFeedbackPercent} /> : <h2>No feedback given</h2>}>
        </Section></Container>
      
    }
}

// title="Please leave feadback"
// title="Statistics"