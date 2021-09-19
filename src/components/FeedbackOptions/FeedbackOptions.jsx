import React from 'react';
import {Button} from "../App.styled";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const createButton = (option) => (
    <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>)    
    
    return Object.keys(options).map(createButton);
    }
    export default FeedbackOptions