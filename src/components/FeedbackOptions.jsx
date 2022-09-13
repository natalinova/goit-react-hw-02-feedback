import styled from 'styled-components';

export default function FeedbackOptions({ good, neutral,bad, totalFeedback, positiveFeedback}) {
    return (<div>
                    <h2> Statistic</h2>
                    <p>Good:{ good}</p>
                    <p>Neutral:{neutral}</p>
                    <p>Bad:{bad}</p>
                    <p>Total Feedback: {totalFeedback}</p>
                    <p>Positive Feedback: { positiveFeedback} %</p>
                </div>)
}