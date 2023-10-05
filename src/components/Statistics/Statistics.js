export const Statistics = ({feedback, onCountTotal,onCountPositive}) => {
    return <div>
        <h2>
        Statistics
        </h2>
        <ul>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad} </li>
            <li>Total: {onCountTotal()} </li>
            <li>PositiveFeedback: {onCountPositive()}% </li>

        </ul>
    </div>
}