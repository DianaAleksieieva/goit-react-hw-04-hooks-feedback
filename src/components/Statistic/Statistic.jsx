import React from 'react';
import PropTypes from "prop-types";

const Statistic = (props) => {
    const { title, good, neutral, bad, total,positiveFeedbackPercentag } = props
    return <div>
            <h2>{title}</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedbackPercentag ? positiveFeedbackPercentag : 0}%</p>
        </div>
    }
    
export default Statistic

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};