import React, {useState} from 'react';
import { Container} from "./App.styled";
import Statistic from './Statistic/Statistic.jsx'; 
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (option) => {
    console.log(option)
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1)
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }
  
  const countPositiveFeedbackPercentage = () => {
    if (good > 0) {
      const goodFeedbackPercent = (((good) / countTotalFeedback()) * 100).toFixed(0);
      return goodFeedbackPercent
    }
  }
  
  const showStatistic = (total = countTotalFeedback()) => {
    let visible = false
    if (total !== 0) { visible = true }
    return visible
  }

   
  return (<Container><Section title="Please leave feadback"
    feedbackOption={<FeedbackOptions
      options={{ good, neutral, bad }}
      onLeaveFeedback={addFeedback} />}
    statistic={showStatistic() ?
      <Statistic
        title="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        positiveFeedbackPercentag={countPositiveFeedbackPercentage()}
        total={countTotalFeedback()} /> : <h2>No feedback given</h2>}>
  </Section></Container>
  )
}

