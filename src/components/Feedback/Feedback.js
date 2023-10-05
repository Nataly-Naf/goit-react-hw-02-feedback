export const FeedbackList = ({ onChangeFeedback }) => {
    return <ul>
        <button onClick={() => { onChangeFeedback('good')} } type="button">Good </button>
<button onClick={() => {onChangeFeedback('neutral')}} type="button">Neutral</button>
<button onClick={() => {onChangeFeedback('bad')}} type="button">Bad</button>
    </ul>
}
